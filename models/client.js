
let mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    email : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true
    },
    compliant : {
        type: String
    },
    contact : {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Client', clientSchema)