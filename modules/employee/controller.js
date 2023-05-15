const EmployeeModel = require('./model')

exports.createEmployee = async (req, res) => {
    try {
        // Create a new Employee
        const result = await EmployeeModel.createEmployee(req.body)
        res.status(201).json({
            status: 'Ok',
            message: result
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
};


exports.getEmployee = async (req, res) => {
    try {
        // Get Single Employee
        const result = await EmployeeModel.getEmployee(req.body)
        res.status(200).json({
            status: 'Success',
            message: result
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
};


exports.getEmployees = async (req, res) => {
    try {
        // Get Single Employee
        const result = await EmployeeModel.getEmployees(req.body)
        res.status(200).json({
            status: 'Success',
            message: result
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
};

module.exports = { getEmployee, getEmployees, createEmployee }