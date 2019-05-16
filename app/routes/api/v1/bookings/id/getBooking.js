const Router = require('express').Router

module.exports = Router({mergeParams: true})
.get('/v1/bookings/:id', async (req, res, next) => {
    try {
        const booking= await req.db.Booking.findById(req.params.id)
        res.status(200).send(booking)
    } catch(error) {
        next(error)
    }
})
