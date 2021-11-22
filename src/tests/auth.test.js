require("../helpers/load-env")();
const request = require("supertest");
const app = require("../app");
const { email, password } = require("./input-data");

describe("POST (signIn) - /api/auth/signin", () => {
  test("Should respond with a code 200", async () => {
    const resp = await request(app)
      .post("/api/auth/signin")
      .send({ email, password });
    expect(resp.statusCode).toBe(200);
  });
  test("Should respond with a code 400", async () => {
    const resp = await request(app).post("/api/auth/signin").send();
    expect(resp.statusCode).toBe(400);
  });
});
