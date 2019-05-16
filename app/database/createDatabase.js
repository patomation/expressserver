const mongoose = require('mongoose')
const glob = require('glob')
const path = require('path')
const dotenv = require('dotenv').config()

module.exports = ({ logger }) => {

    const url = process.env.MONGODB_URL

    mongoose.connect(url)

    const models = glob.sync('./schemas/**/*.js', { cwd: __dirname })
    .map(filename => {
        return {
            schema: require(filename),
            name: path
                .basename(filename)
                .replace(path.extname(filename), ''),
        }
    })
    .map(({name, schema}) => mongoose.model(name, schema));

    // Map models to db object giving each model a key name
    db = {}
    models.forEach( (model) => {
      let modelObject = { [model.modelName]: model};
      db = { ...db, ...modelObject }
    })

    mongoose
    .connection
    .on('error', error => {
        throw error
    })
    .once('open', () => logger.info(`MongoDB connected at ${url}`))

    return db

}
