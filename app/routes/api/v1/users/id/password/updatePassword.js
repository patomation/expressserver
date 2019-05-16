const Router = require('express').Router

module.exports = Router({mergeParams: true})
.put('/v1/users/:id/password', async (req, res, next) => {
    try {
        const user= await req.db.User.findById(req.params.id)
        user.password = req.body.password
        await user.save()

        const response = {
          message: 'password updated',
          id: req.params.id
        }
        res.status(204).send(response)

    } catch(error) {
        next(error)
    }
})
