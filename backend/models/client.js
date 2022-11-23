
let mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    email : {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Client', clientSchema)