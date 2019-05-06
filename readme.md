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
