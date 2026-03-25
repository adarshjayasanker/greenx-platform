import {body} from 'express-validator';

const createValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("phone").notEmpty().withMessage("Phone Number is required").matches(/^[0-9]{10}$/).withMessage("Invalid Phone Number"),
    body("serviceRequested").optional().isMongoId().withMessage("Invalid Service ID"),
    body("source").optional().isString()
]

export default createValidation;