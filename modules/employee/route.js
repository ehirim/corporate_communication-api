const employee = require('express').Router()

// Middleware Functions
const { validateSchema } = require('../../middleware/validateSchema')

// Import Schemas
const { createEmployee } = require('./controller')

employee.post('/employee', validateSchema(createEmployeeSchema), createEmployee)




module.exports = { employee }