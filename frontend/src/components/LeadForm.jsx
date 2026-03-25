import { useState } from "react";
import API_BASE_URL from "../config/api";

const LeadForm = ({serviceId = null}) => {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try{
           const res = await fetch(`${API_BASE_URL}/leads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...form,
                serviceRequested: serviceId,
            }),
           });
           if(res.ok){
            alert("We will contact you shortly!");
            setForm({
                name: "",
                phone: "",
                email: "",
                location: "",
                message: "",
            })
           }
        }catch(error){
            console.error(error);
            alert("Something went wrong");
        }finally{
            setLoading(false);
        }
    }


    return(
        <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" required onChange={handleChange} value={form.name} />
            <input name="phone" placeholder="Phone Number" required onChange={handleChange} value={form.phone} />
            <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
            <input type="location" placeholder="Location" onChange={handleChange} value={form.location} />
            <textarea name="message" placeholder="Describe your issue" onChange={handleChange} value={form.message} />
            <button disabled={loading}>
                {loading ? "Submitting..." : "Request Service"}
            </button>
        </form>
    )
};

export default LeadForm;