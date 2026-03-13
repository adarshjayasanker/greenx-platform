import asyncHandler from "../../utils/asyncHandler.js";
import { approveTestimonial, deleteTestimonial, getAllTestimonials, getApprovedTestimonials, submitTestimonial } from "./testimonial.service.js";

const testimonialControllers = {

    submitTestimonial: asyncHandler(async(req, res) => {
       const {name, message: rating} = req.body;
       const testimonial = await submitTestimonial({
        name,
        message,
        rating
       });
       res.status(201).json({message: "Testimonial submitted for approval", testimonial});
    }),

    getApprovedTestimonials: asyncHandler(async(req, res) => {
        const testimonials = await getApprovedTestimonials();
        res.json(testimonials);
    }),

    getAllTestimonials: asyncHandler(async(req, res) => {
        const testimonials = await getAllTestimonials();
        res.json(testimonials);
    }),

    approveTestimonial: asyncHandler(async(req, res) => {
        const testimonial = await approveTestimonial(req.params.id);
        res.json({message: "Testimonial approved", testimonial});
    }),

    deleteTestimonial: asyncHandler(async(req, res) => {
        await deleteTestimonial(req.params.id);
        res.json({message: "Testimonial deleted"});
    })
};

export default testimonialControllers;