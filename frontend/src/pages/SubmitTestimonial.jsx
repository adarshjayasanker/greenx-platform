import { useState } from "react"
import {submitTestimonial} from '../api/testimonials.api.js'

const submitTestimonial = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(5);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try{
           await submitTestimonial({name, message, rating});
           setSuccess(true);
           setName("");
           setMessage("");
           setRating(5);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }
    return(
        <section className="py-24 bg-gray-50">
            <div className="max-w-xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900">Leave a Review</h2>
                <p className="text-center "></p>
            </div>
        </section>
    )
}