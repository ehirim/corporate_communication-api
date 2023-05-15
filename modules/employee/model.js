const repository = require('./repository')

exports.createEmployee = async (data) => {
    try {
        return await repository.createEmployee(data)
    } catch (err) {
        throw Error(err)
    }
}