const mongoose = require('mongoose')

const Cor = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})