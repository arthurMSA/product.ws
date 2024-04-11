import Joi from 'joi'

export default Joi.object({
    name: Joi.string().required(),
    amount: Joi.number().required(),
    description: Joi.string().required(),
})