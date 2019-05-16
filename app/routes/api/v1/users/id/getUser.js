const Router = require('express').Router

module.exports = Router({mergeParams: true})
.get('/v1/users/:id', async (req, res, next) => {
    try {
        const user= await req.db.User.findById(req.params.id)
        res.status(200).send(user)
    } catch(error) {
        next(error)
    }
})
