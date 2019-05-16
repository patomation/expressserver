const Router = require('express').Router

module.exports = Router({mergeParams: true})
.delete('/v1/users/:id', async (req, res, next) => {
    try {
        req.db.user.findByIdAndRemove(req.params.id, (err, user) => {
          const response = {
            message: "User successfully deleted",
            id: req.params.id
          }
          res.status(200).send(response)
        });

    } catch(error) {
        next(error)
    }
})
