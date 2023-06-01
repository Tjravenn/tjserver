## Endpoints

List of Available Endpoints:

- GET /job

- GET /job/:id

- POST /job

- DELETE /job/:id

- PUT /job/:id

- PATCH /job/:id

- GET /company

- GET /company/:id

- POST /company

- DELETE /company/:id

- GET /user

- GET /user/:id

- POST /user/register

- POST /user/login

- DELETE /user/:id

- POST /user/loginGoogle

- GET /history

### GET /job

#### Description

- Get all the job data

#### Request

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "job": [
        {
            "id": Integer,
            "title": String,
            "description": Text,
            "imgUrl": Text,
            "companyId": Integer,
            "authorId": Integer,
            "jobType": String,
            "createdAt": Date,
            "updatedAt": Date,
            "User": {
                "id": Integer,
                "username": String,
                "email": String,
                "role": String,
                "phoneNumber": String,
                "address": String,
                "createdAt": Date,
                "updatedAt": Date,
            },
            "Company": {
                "id": Integer,
                "name": String,
                "companyLogo": String,
                "location": String,
                "email": String,
                "description": Text,
                "createdAt": Date,
                "updatedAt": Date,
            }
        }
      ]
  }
  ```

### GET /job/:id

#### Description

- Get job data by id

#### Request

- Params

  ```json
  {
    "id": "Integer"
  }
  ```

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "job": {
        "id": Integer,
        "title": String,
        "description": Text,
        "imgUrl": Text,,
        "companyId": Integer,
        "authorId": Integer,
        "jobType": String,
        "createdAt": Date,
        "updatedAt": Date,
        "User": {
                "id": Integer,
                "username": String,
                "email": String,
                "role": String,
                "phoneNumber": String,
                "address": String,
                "createdAt": Date,
                "updatedAt": Date,
            },
            "Company": {
                "id": Integer,
                "name": String,
                "companyLogo": String,
                "location": String,
                "email": String,
                "description": Text,
                "createdAt": Date,
                "updatedAt": Date,
            }
    }
  }
  ```
  _404 - Data not found_
- Body
  ```json
  {
    "statusCode": 404,
    "msg": String
  }
  ```

### POST /job

#### Description

- Create a new job data

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```

  ```json
  {
    "access-token": "String"
  }
  ```

- Body
  ```json
  {
       "id": Integer,
       "title": String,
       "description": Text,
       "imgUrl": Text,
       "companyId": Integer,
       "authorId": Integer,
       "jobType": String,
       "updatedAt": Date,
       "createdAt": Date
   }
  
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
   "statusCode": 201,
   "msg": "Job success to create",
   "job": {
       "id": Integer,
       "title": String,
       "description": Text,
       "imgUrl": Text,
       "companyId": Integer,
       "authorId": Integer,
       "jobType": String,
       "updatedAt": Date,
       "createdAt": Date
   }
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "msg": String
  }
  ```

### DELETE /job/:id

#### Description

- Remove a job data based on given id

#### Request

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "msg": "Jobs with {id} success to delete"
  }
  ```
  _4004 - Not found_
- Body

  ```json
  {
    "statusCode": 404,
    "msg": "Id not found"
  }
  ```

  _403 - Forbidden_

- Body

  ```json
  {
    "statusCode": 403,
    "msg": "You have no access"
  }
  ```

### PUT /job/:id

#### Description

- Updated job by Id

#### Request

- Params

  ```json
  {
    "id": "integer"
  }
  ```

- Body

```json
{
  "title": "String",
  "description": "String",
  "imgUrl": "String",
  "companyId": "String",
  "jobType": "String",
}
```

- Headers

```json
{
   "access_token": "String",
}
```

#### Response

_200 - OK_

- Body
  ```json
  {
   "statusCode": 200,
   "msg": "Job has been updated",
  }
  ```

_404 - Data Not Found_

- Body

  ```json
  {
    "statusCode": 404,
    "msg": String
  }
  ```

### PATCH /job/:id

#### Description

- Updated job status by Id

#### Request

- Params

  ```json
  {
    "id": "integer"
  }
  ```

- Body

```json
{
  "status": "String",
}
```

- Headers

```json
{
   "access_token": "String",
}
```

#### Response

_200 - OK_

- Body
  ```json
  {
   "statusCode": 200,
   "msg": "Job status has been updated",
  }
  ```

_404 - Data Not Found_

- Body

  ```json
  {
    "statusCode": 404,
    "msg": String
  }
  ```

### GET /company

#### Description

- Get all the company data

#### Request

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "company": [
      {
        "id": Integer,
        "name": String,
        "companyLogo": String,
        "location": String,,
        "email": String,
        "description": String,
        "createdAt": Date,
        "updatedAt": Date,
      }
    ]
  }
  ```

### GET /company/:id

#### Description

- Get company data by id

#### Request

- Params

  ```json
  {
    "id": "Integer"
  }
  ```

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "company": {
        "id": Integer,
        "name": String,
        "companyLogo": String,
        "location": String,,
        "email": String,
        "description": String,
        "createdAt": Date,
        "updatedAt": Date,
    }
  }
  ```
  _404 - Data not found_
- Body
  ```json
  {
    "statusCode": 404,
    "msg": String
  }
  ```

### POST /company

#### Description

- Create a new company data

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded",
    "acces_token": "String"
  }
  ```

- Body

```json
{
        "id": Integer,
        "name": String,
        "companyLogo": String,
        "location": String,,
        "email": String,
        "description": String,
        "createdAt": Date,
        "updatedAt": Date,
}
```

#### Response

_201 - Created_

- Body
  ```json
  {
   "statusCode": 201,
   "msg": "Company success to create",
   "company": {
       "id": Integer,
        "name": String,
        "companyLogo": String,
        "location": String,,
        "email": String,
        "description": String,
        "createdAt": Date,
        "updatedAt": Date,
   }
  }
  ```

_400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "msg": String
  }
  ```

### DELETE /company/:id

#### Description

- Remove a company data based on given id

#### Request

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "msg": "Company with {id} success to delete"
  }
  ```
  _4004 - Not found_
- Body

  ```json
  {
    "statusCode": 404,
    "msg": "Id not found"
  }
  ```

### GET /user

#### Description

- Get all the user data

#### Request

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "user": [
      {
        "id": Integer,
        "username": String,
        "email": String,
        "role": String,,
        "phoneNumber": String,
        "address": String,
        "createdAt": Date,
        "updatedAt": Date,
      }
    ]
  }
  ```

### GET /user/:id

#### Description

- Get user data by id

#### Request

- Params

  ```json
  {
    "id": "Integer"
  }
  ```

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "user": {
        "id": Integer,
        "username": String,
        "email": String,
        "role": String,,
        "phoneNumber": String,
        "address": String,
        "createdAt": Date,
        "updatedAt": Date,
    }
  }
  ```
  _404 - Data not found_
- Body

  ```json
  {
    "statusCode": 404,
    "msg": String
  }
  ```

### POST /user/register

#### Description

- Create a new user data

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```

  ```json
  {
    "access-token": "String"
  }
  ```

- Body

```json
{
        "id": Integer,
        "username": String,
        "email": String,
        "password": String,,
        "role": String,
        "phoneNumber": String,
        "address": String,
        "createdAt": Date,
        "updatedAt": Date,
}
```

#### Response

_201 - Created_

- Body
  ```json
  {
   "statusCode": 201,
   "msg": "User success to create",
   "user": {
       "id": Integer,
        "name": String,
        "companyLogo": String,
        "location": String,,
        "email": String,
        "description": String,
        "createdAt": Date,
        "updatedAt": Date,
   }
  }
  ```

_400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "msg": String
  }
  ```

### POST /user/login

#### Description

- LOGIN

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```

- Body

  ```json
  {
    "email": String,
    "password": String,
  }
  ```

  #### Response

_200 - OK_

- Body

```json
{
    "statusCode": 200,
    "msg": "User logged in successfully",
    "access_token": "String",
    "user": {
        "id": Integer,
        "email": String,
        "role": String,
    }
}
```

_400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "msg": String
  }
  ```

### DELETE /user/:id

#### Description

- Remove a user data based on given id

#### Request

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "msg": "User with {id} success to delete"
  }
  ```
  _404 - Not found_
- Body

  ```json
  {
    "statusCode": 404,
    "msg": "Id not found"
  }
  ```

### POST /user/loginGoogle

#### Description

- Login

#### Request

- Body

  ```json
  {
    "token_google": "String"
  }
  ```

#### Response

_200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "acces_token": "String",
    "id": "Integer",
    "role": "String",
    "username": "String",
    "status": "String"
  }
  ```

  _201 - Create_

  - Body

  ```json
  {
    "statusCode": 200,
    "acces_token": "String",
    "id": "Integer",
    "role": "String",
    "username": "String",
    "status": "String"
  }
  ```

  _400 - Bad Request_

  - Body

  ```json
  {
    "statusCode": 400,
    "msg": "String"
  }
  ```

  _404 - ID/Data Not Found_

  - Body

  ```json
  {
    "statusCode": 404,
    "msg": "String"
  }
  ```

### GET /history

#### Description

- Get all history

#### Request

- Headers

  ```json
  {
    "access-token": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "history":[ 
      {
        "id": Integer,
        "name": String,
        "description": String,
        "updatedBy": String,,
        "createdAt": Date,
        "updatedAt": Date,
    },
    ]
  }
  ```

### Global Error

#### Response

_401 - JsonWebTokenError_

- Body

  ```json
  {
    "statusCode": 401,
     "msg": "Invalid token"
  }
  
  ```

_500 - Internal Server Error_

- Body

  ```json
  {
    "statusCode": 500,
    "error": {
      "msg": "Internal Server Error"
    }
  }
  ```
