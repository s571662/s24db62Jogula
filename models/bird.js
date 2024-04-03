const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
bird_name: String,
color: String,
lifespan: Number
})
module.exports = mongoose.model("bird", birdSchema)