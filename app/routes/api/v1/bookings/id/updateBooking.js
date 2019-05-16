const Router = require('express').Router

module.exports = Router({mergeParams: true})
.put('/v1/bookings/:id', async (req, res, next) => {
    try {
        const booking= await req.db.Booking.findById(req.params.id)

        //Only update the key values provided in body
        for (key in req.body) {
            booking[key] = req.body[key]
        }

        await booking.save()

        const response = {
          message: 'booking updated',
          id: req.params.id,
          booking: booking
        }
        res.status(204).send(response)

    } catch(error) {
        next(error)
    }
})
