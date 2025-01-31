## Task 2: Backend Development - A Basic API Using Node.js & Express

### How to setup & run locally: - 
- clone the git repo into your local machine.
- open the root folder in your IDE.
- run `npm install` to install node modules.
- run `npm run start` to start the server at port 9000.

### How to verify the api calls: -
- open postman or curl (use postman desktop client as the project is on localhost).
- send get request at `http://localhost:9000/users` to retrieve all the users.
- send post request at `http://localhost:9000/users` with the body set as { name: <your_name>, email: <your_email_id> } to add a new user to the list.
- send the get request again to verify the added user.
- send delete request at `http://localhost:9000/users/<id of a user>`.
- send the get request again at `http://localhost:9000/users` to verify the deleted user.

## Example 
- Request: `get http://localhost:9000`,
- Response:
```JSON
[{
    "id": "f8e7ab8e-2b6c-4550-8b0a-c7fda52a0448",
    "user_name": "Berke Noteyoung",
    "email": "bnoteyoung0@livejournal.com"
}, {
    "id": "963b9da0-5112-460a-a22a-d5dd2a7d37cf",
    "user_name": "Alain Edwins",
    "email": "aedwins1@hud.gov"
}, {
    "id": "ac77f47e-b728-4e4b-bbd7-12339d85e805",
    "user_name": "Mignonne Lewtey",
    "email": "mlewtey2@aboutads.info"
}, {
    "id": "4e882931-1e91-4229-9c93-c56c23217e2b",
    "user_name": "Sully Twycross",
    "email": "stwycross3@foxnews.com"
}, {
    "id": "9ac0c5df-fb2a-45d4-bf9f-920a80464213",
    "user_name": "Konstantine Gobel",
    "email": "kgobel4@harvard.edu"
}]
```
- Request: `post http://localhost:9000 , body:{"name": "Shreyansh", "email": "abc@email.com"}`,
- Response: `User added successfully`
- Request: `get http://localhost:9000`
```JSON
[{
    "id": "f8e7ab8e-2b6c-4550-8b0a-c7fda52a0448",
    "user_name": "Berke Noteyoung",
    "email": "bnoteyoung0@livejournal.com"
}, {
    "id": "963b9da0-5112-460a-a22a-d5dd2a7d37cf",
    "user_name": "Alain Edwins",
    "email": "aedwins1@hud.gov"
}, {
    "id": "ac77f47e-b728-4e4b-bbd7-12339d85e805",
    "user_name": "Mignonne Lewtey",
    "email": "mlewtey2@aboutads.info"
}, {
    "id": "4e882931-1e91-4229-9c93-c56c23217e2b",
    "user_name": "Sully Twycross",
    "email": "stwycross3@foxnews.com"
}, {
    "id": "9ac0c5df-fb2a-45d4-bf9f-920a80464213",
    "user_name": "Konstantine Gobel",
    "email": "kgobel4@harvard.edu"
}, {
    "id": "d9a17c6d-0a31-430f-b480-d21c2227ce5f",
    "user_name": "shreyansh",
    "email": "abc@email.com"
}]
```

- Request: `delete http://localhost:9000/4e882931-1e91-4229-9c93-c56c23217e2b`, this will delete the user Sully from the list.
- Response: `User deleted successfully` 
- Request: - `get http://localhost:9000`
- Response:
```JSON
[{
    "id": "f8e7ab8e-2b6c-4550-8b0a-c7fda52a0448",
    "user_name": "Berke Noteyoung",
    "email": "bnoteyoung0@livejournal.com"
}, {
    "id": "963b9da0-5112-460a-a22a-d5dd2a7d37cf",
    "user_name": "Alain Edwins",
    "email": "aedwins1@hud.gov"
}, {
    "id": "ac77f47e-b728-4e4b-bbd7-12339d85e805",
    "user_name": "Mignonne Lewtey",
    "email": "mlewtey2@aboutads.info"
}, {
    "id": "9ac0c5df-fb2a-45d4-bf9f-920a80464213",
    "user_name": "Konstantine Gobel",
    "email": "kgobel4@harvard.edu"
}, {
    "id": "d9a17c6d-0a31-430f-b480-d21c2227ce5f",
    "user_name": "shreyansh",
    "email": "abc@email.com"
}]
```
