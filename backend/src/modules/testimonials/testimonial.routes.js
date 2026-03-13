import express from 'express';
import protect from '../../middleware/authMiddleware.js';
import testimonialControllers from './testimonial.controller.js'
const {submitTestimonial, getApprovedTestimonials, getAllTestimonials, approveTestimonial, deleteTestimonial} = testimonialControllers;

const testimonialRouter = express.Router();

testimonialRouter.post('/submit', submitTestimonial);
testimonialRouter.get('/getapprovedtestimonials', getApprovedTestimonials);

testimonialRouter.get('/showall', protect, getAllTestimonials);
testimonialRouter.patch('/:id/approve', protect, approveTestimonial);
testimonialRouter.delete('/:id', protect, deleteTestimonial);

export default testimonialRouter;