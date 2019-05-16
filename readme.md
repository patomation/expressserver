# Express Server

### Getting Started

Copy .env.default to .env
```
cp .env.default .env
```
Note: .env is not tracked to repo for obvious reasons.
Add your DB url from cloud.mongodb.com
```
MONGODB_URL=mongodb+srv://<dbUser>:<password>@cluster0-fake.mongodb.net/test?retryWrites=true
```

### Start the server localy
run
```
node server.js
```

# Notes:
Test Form Submit endpoint
```bash
curl -d 'name=bob&email=cool@gmail.com' http://localhost:8080/api/contact/submit
```
Test login
```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz"}' \
  http://localhost:3000/api/login
```  

# WORKING CURL TESTS:
Mongoose CRUD (Create, Read, Update, Delete)
## Add new user
```
curl -X POST -d "username=mynewuser&password=coolpassword" localhost:8080/api/v1/users
```
## Update Password
```
curl -X PUT -d "password=newpassword" localhost:8080/api/v1/users/5cdccf0dc61e550d0b7b86e7/password
```
## Get User(s)
```
curl -g  localhost:8080/api/v1/users
```
## Get a User by ID
```
curl -g  localhost:8080/api/v1/users/5cdccf0dc61e550d0b7b86e7
```
## Delete user
```
curl -X DELETE  localhost:8080/api/v1/users/5cdccf0dc61e550d0b7b86e7
```





Design Pattern Guide I used:
[Design Pattern](https://medium.com/@carlos.illobre/nodejs-express-how-to-organize-your-routes-in-very-big-applications-and-why-controllers-are-evil-e202eea497f4)


# TODO:
- Add some routs and try it out
- Write Unit Tests

# Routs I want:
- get schedule
- book add booking
- contact form post - email user the message
- Leave a review - Similar to contact form


# To create booking
POST api/v1/bookings
# Get all bookings
GET api/v1/bookings
# Get a particular booking
GET api/v1/bookings/<id>
#Udate a booking
PUT api/v1/bookings/<id>
# Delete a booking
DELETE api/v1/bookings/<id>


#To create
POST /api/users
# To get all users
GET /api/users
# To get particular user.
GET /api/users/<id>
# To update particular user.
PUT /api/users/<id>
# To delete particular user
DELETE /api/users/<id>
