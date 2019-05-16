const Router = require('express').Router

module.exports = Router({mergeParams: true})
.delete('/v1/bookings/:id', async (req, res, next) => {
    try {
        req.db.Booking.findByIdAndRemove(req.params.id, (err, booking) => {
          const response = {
            message: "Booking successfully deleted",
            id: req.params.id,
            booking: booking
          }
          res.status(200).send(response)
        });

    } catch(error) {
        next(error)
    }
})
