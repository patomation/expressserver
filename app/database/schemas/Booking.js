const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
  date:      String,
  travelers: Number,
  location:  String,
  startTime: String,
  endTime:   String,
  Price:     Number,
})

const bookingSchema = new Schema({
  firstname:     String,
  lastname:      String,
  email:         String,
  phone:         String,
  country:       String,
  hoteldetails:  String,
  extracomments: String,
  days:          [daySchema],
  totalPrice:    Number,
  deposite:      Number,
  remainder:     Number,
})


module.exports = bookingSchema
