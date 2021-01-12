const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Id : {
        type: String,
        required:true,
        unique: true
    },
    Title : {
        type: String,
        required:true
    },
    Source : {
        type: String,
        required:true
    },
    Frequency : {
        type: String,
        required:true
    },
    Unit : {
        type: String,
        required:true
    },
    Description : {
        type: String,
        required:true
    },
    Tags : {
        type : String
    }
}, { collection: 'data' })

module.exports = Data = mongoose.model('data',DataSchema);