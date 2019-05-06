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
Test endpoint
```bash
curl -g name='bob&email=myemail@email.com&date=05072019&message=cool%20place&adults=2' localhost:8080/book
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
