const Joi = require('joi')

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema)
            if (result.error) {
                return res.status(400).json(result.error)
            }

            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value
            next()
        }
    },  

    schemas: {
        authSchema: Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }),
        postSchema: Joi.object().keys({
            title: Joi.string().required(),
            category: Joi.string().required(),
            campus: Joi.string().required(),
            address: Joi.string().required(),
            duedate: Joi.date().required(),
            budget: Joi.number().required(),
            details: Joi.string().required(),
        })
    }

}
