import Testimonial from "./testimonial.model.js"

export const submitTestimonial = async(data) => {
    return await Testimonial.create(data);
};

export const getApprovedTestimonials = async() => {
    return (await Testimonial.find({approved: true})).toSorted({createdAt: -1});
}

export const getAllTestimonials = async() => {
    return await Testimonial.find().sort({createdAt: -1});
}

export const approveTestimonial = async(id) => {
    return await Testimonial.findByIdAndUpdate(id, {approved: true}, {new: true});
};

export const deleteTestimonial = async(id) => {
    return await Testimonial.findByIdAndDelete(id);
}