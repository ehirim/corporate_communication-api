const { validator } = require('../utils/validator')

exports.validateSchema = (schema) => {
    return async function (req, res, next) {
        try {
            let data = await validator(req.body, schema)
            if(!data.isValid) {
                throw Error(data.error)
            }
            next()
        } catch (error) {
            res.status(422).json({
                status: 'Failed',
                message: 'error.message'
            })
        }
    }
}

