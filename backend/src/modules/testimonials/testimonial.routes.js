import express from 'express';
import protect from '../../middleware/authMiddleware.js';
import testimonialControllers from './testimonial.controller.js'
const {submitTestimonial, getApprovedTestimonials, getAllTestimonials, approveTestimonial, deleteTestimonial} = testimonialControllers;

const testimonialRouter = express.Router();

testimonialRouter.post('/submit', submitTestimonial);
testimonialRouter.get('/', getApprovedTestimonials);

testimonialRouter.get('/all', protect, getAllTestimonials);
testimonialRouter.patch('/:id', protect, approveTestimonial);
testimonialRouter.delete('/remove/:id', protect, deleteTestimonial);

export default testimonialRouter;