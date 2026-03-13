import {body} from 'express-validator';

const createValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("phone").notEmpty().withMessage("Phone Number is required"),
    body("serviceRequested").notEmpty().withMessage("Invalid service Id"),
]

export default createValidation;