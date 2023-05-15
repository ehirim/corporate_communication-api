const Joi = require('joi');
const mongoose = require('mongoose');


exports.createEmployeeSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    identifier: Joi.string().required(),
    address: Joi.string().min(2).max(200).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(11).max(11).required(),
})

// Mongoose Employee Schema
const employeeSchema = new mongoose.Schema({
    name: String,
    identifier: String,
    address: String,
    email: String,
    phone: String
})


// Mongoose Employee Model
exports.EmployeeCollection = mongoose.model('Employee', employeeSchema);