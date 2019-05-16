const Router = require('express').Router

module.exports = Router({mergeParams: true})
.get('/v1/bookings', async (req, res, next) => {
    try {
        const bookings = await req.db.Booking.find()
        res.status(200).send(bookings)
    } catch (error) {
        next(error)
    }
})
