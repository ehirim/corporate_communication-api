
exports.validator = async (data, Schema) => {
    try {
        let value = await Schema.validateAsync(data)
        return {
            isValid: true,
            value,
        }
    } catch (error) {
        return {
            isValid: false,
            error
        }
    }
}

// module.exports = validator;