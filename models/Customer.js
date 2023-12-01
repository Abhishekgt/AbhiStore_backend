const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    clientName: String,
    email: String,
    phone: Number,
    password: String,
    address: String,
    city: String,
    country: String,
    zip: Number
})

const CustomerModel = mongoose.model("Customer", CustomerSchema)
module.exports = CustomerModel