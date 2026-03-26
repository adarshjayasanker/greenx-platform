import { useContext, useState } from "react";
import { useLead } from "../context/LeadContext";
import ServiceContext from "../context/ServiceContext";
import API_BASE_URL from "../config/api";
import ServiceDropdown from "./ServiceDropdown.jsx";
import { useToast } from "../context/ToastContext.jsx";

const LeadForm = () => {
    const {leadData, closeLeadModal} = useLead();
    const {showToast} = useToast();
    const {services} = useContext(ServiceContext);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        location: "",
        serviceRequested: leadData?.serviceId || "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };
    const handleSubmit = async(e) => {
        console.log(API_BASE_URL);
        
        e.preventDefault();
        if(!form.name || !form.phone){
            showToast({message: "Please fill required fields", type: "error"});
            return;
        }
        try{
           setLoading(true);
           const res = await fetch(`${API_BASE_URL}/leads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...form,
                source: leadData.source,
            })
           });
           if(res.ok){
            closeLeadModal();
            console.log(res)
            showToast({message: "We will contact you shortly. Thankyou!", type: "Success"})
           }
        }catch(error){
            showToast({message: "Something went wrong. Please try again", type: "error"});
        }finally{
            setLoading(false);
        }
    }
    const selectedService = services?.find((s) => s._id === form.serviceRequested);
    return(
        <form onSubmit={handleSubmit}className="space-y-4">
            <h2 className="text-xl font-semibold">Request Service</h2>
            {form.serviceRequested ? (
                <p className="text-sm text-gray-600">Service: <strong>{selectedService?.title}</strong></p>
            ) : (
                <ServiceDropdown services={services} value={form.serviceRequested} onChange={(value) => setForm((prev) => ({...prev, serviceRequested: value}))}/>
            )}
            <input name="name" placeholder="Your Name" onChange={handleChange} className="w-full border p-2 rounded" />
            <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full border p-2 rounded" />
            <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" />
            <input name="location" placeholder="Location" onChange={handleChange} className="w-full border p-2 rounded" />
            <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border p-2 rounded"/>
            <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded">{loading ? "Submitting" : "Submit Request"}</button>
        </form>
    )
};

export default LeadForm;