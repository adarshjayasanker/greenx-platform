import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion";

const TestimonialModal = ({isOpen, onClose}) => {

    const [formData, setFormData] = useState({
        name: "",
        message: "",
        rating: 5
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
           setLoading(true);
           await fetch('/api/testimonials', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
           });
           alert("Thank you! Your testimonial will appear after approval.");
           setFormData({
            name: "",
            message: "",
            rating: 5
           });
           onClose();
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    }

    if (!isOpen) return null;

    return(
        <AnimatePresence>
            <motion.div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} onClick={onClose}>
                <motion.div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative" initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0.9, opacity: 0}} transition={{duration: 0.3}} onClick={(e) => e.stopPropagation()}>
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
                    <h3 className="text-2xl font-bold mb-6">Leave a Review</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
                        <select name="rating" value={formData.rating} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option value="5">⭐⭐⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="1">⭐</option>
                        </select>
                         <textarea name="message" rows="4" placeholder="Write your review..." required value={formData.message} onChange={handleChange} className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"/>
                         <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold">{loading ? "Submitting" : "Submit Review"}</button>
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TestimonialModal;