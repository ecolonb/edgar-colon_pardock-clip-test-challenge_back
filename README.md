# Backend

Code challenge test

## Installation

## PART I: Download & Build on local

### 1) Clone the repository, install node packages and verify routes locally

```
git https://github.com/ecolonb/edgar-colon_pardock-clip-test-challenge_back
cd edgar-colon_pardock-clip-test-challenge_back
npm install
npm start
```

With postman verify the api is working by accessing:  
POST `/api/auth/signin`  
Input data:

```
{
    "email":"edd@test.com",
    "password":"12345678"
}
```

POST `/api/auth/signup`  
Input data:

```
{
    "name":"Edd Test",
    "lastName":"Test",
    "email":"edd@test.com",
    "password":"12345678"
}
```

With token in headers (Authorization)

```
headers.Authorization = Bearer accessToken
```

GET `/api/customer/all`

POST `/api/customer/new`  
Input data:

```
{
    "name": "John213455",
    "email": "johndoe311@example.com",
    "last_name": "Created Customer",
    "address": {
      "city": "Queretaro",
      "state": "Queretaro",
      "line1": "Calle Morelos no 10",
      "line2": "col. san pablo",
      "postal_code": "76000",
      "country_code": "MX"
    },
    "phone_number": "12121222222"
  }
```

PATCH `api/customer/update/{customerId}`  
Input data:

```
{
    "name": "John213455",
    "email": "johndoe311@example.com",
    "last_name": "UpdateCliente",
    "address": {
      "city": "Queretaro",
      "state": "Queretaro",
      "line1": "Calle Morelos no 10",
      "line2": "col. san pablo",
      "postal_code": "76000",
      "country_code": "MX"
    },
    "phone_number": "12121222222"
  }
```
