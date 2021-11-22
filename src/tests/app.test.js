require("../helpers/load-env")();
const request = require("supertest");
const app = require("../app");
const { customerData, email, password } = require("./input-data");
const { signIn } = require("../controllers/auth");

describe("API /api/customer", () => {
  let accessToken = "";
  let customerIdToDelete = "sss";

  test("/all - should respond with a code 200", async () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: (result) => result
    };
    const req = {
      body: {
        email,
        password
      }
    };
    const { token } = await signIn(req, res);
    accessToken = token;
    const resp = await request(app)
      .get("/api/customer/all")
      .set("Authorization", token)
      .send();
    expect(resp.statusCode).toBe(200);
  });
  test("/all should respond with a code 400", async () => {
    const resp = await request(app).get("/api/customer/all").send();
    expect(resp.statusCode).toBe(400);
  });
  test("/new Should respond with a code 200", async () => {
    const resp = await request(app)
      .post("/api/customer/new")
      .set("Authorization", accessToken)
      .send(customerData);
    customerIdToDelete = resp.body.customer.id;
    expect(resp.statusCode).toBe(201);
  });
  test("/new Should respond with a code 400", async () => {
    const resp = await request(app)
      .post("/api/customer/new")
      .set("Authorization", accessToken)
      .send();

    expect(resp.statusCode).toBe(400);
  });
  test("/update Should respond with a code 200", async () => {
    const resp = await request(app)
      .patch("/api/customer/update/" + customerIdToDelete)
      .set("Authorization", accessToken)
      .send(customerData);
    expect(resp.statusCode).toBe(200);
  });
  test("/delete Should respond with a code 200", async () => {
    const resp = await request(app)
      .delete("/api/customer/delete/" + customerIdToDelete)
      .set("Authorization", accessToken)
      .send();
    expect(resp.statusCode).toBe(200);
  });
});
