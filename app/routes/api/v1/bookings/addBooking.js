const Router = require('express').Router

module.exports = Router({mergeParams: true})
.post('/v1/bookings', async (req, res, next) => {
    try {
        //Dynamically get booking data.
        // Only schema data is allowed
        const booking = new req.db.Booking(req.body)

        await booking.save()
        const location = '${req.base}${req.originalUrl}/${booking.id}'
        res.setHeader('Location', location)
        res.status(201).send(booking)
    } catch(error) {
        next(error)
    }
})
