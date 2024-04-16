const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
    bird_name: {
        type: String,
        minlength: 8,
        maxlenght: 56,
    },
    color: String,
    lifespan: {
        type: Number,
        min: 12,
        max: 20,
    }

})
module.exports = mongoose.model("bird", birdSchema)