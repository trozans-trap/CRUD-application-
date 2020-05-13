Dependencies Installed -
  body-parser
  express
  mongoose
  nodemon

Directly use Api Heroku hosted link  with further additions in link (ex - /server ) for each case as mentioned under -
  https://hungerstaytask.herokuapp.com

other wise use 
  https://localhost:400


Get all server
   /server

Get server by passing server-id as parameter
   /server/123    || /server/id
   *(if id doesn't exist 404 message is returned)

PUT server
   /server

    JSON-encoded message body
   {
      "name": "my centos",
      "id": "123",
      "Language":"java",
      "Framework":"Django"
   }
   **(Here id must be same as of the orignal server object else error will be thrown , everything else can be updated)

DELETE server
    /server/123    || /server/id

GET(find) server by name
    /serverbyname/my centos  || /serverbyname/name

POST(create) Server
    /server
    JSON-encoded message body
   {
      "name": "vikalp",
      "id": "123456",
      "Language":"javascript",
      "Framework":"nodejs"
   }
   *(id must be unique else error will be thrown)


*In the cases where id is passed if the object doesn't exists message of 404 or id doesn't exist will appear


Explanation-

Main file where server is running is app.js
config->keys.js consist mongo atlas link (Mongodb is used as database)
models->server.js consist of defined schema

To make the code easy to debug and make it easy to understand by everyone GET , POST , PUT , DELETE are written seperately in run.js(under controller) and exporeted to api.js (in routes)


