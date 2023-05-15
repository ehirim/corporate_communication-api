const { EmployeeCollection } = require('./schema')

exports.createEmployee = async (data) => {
    try {
        // data.identifier = `@${data.identifier}`
        return EmployeeCollection.create(data)
    } catch (err) {
        throw Error(err)
    }
}