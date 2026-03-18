import { useEffect, useState } from "react"

const TestimonialsManager = () => {

    const [testimonials, setTestimonials] = useState([]);

    const fetchTestimonials = async() => {
        const token = localStorage.getItem('token');
        try{
            const response = await fetch('http://localhost:5000/testimonials/all', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setTestimonials(data)
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTestimonials();
    }, []);

    return(
        <div>
            <h1 className="text-2xl font-semibold mb-6">Testimonials Manager</h1>
            <table className="w-full bg-white shadow rounded">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3">Name</th>
                        <th className="p-3">Message</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials?.map(t => (
                        <tr key={t._id} className="border-t">
                            <td className="p-3">{t.name}</td>
                            <td className="p-3">{t.message}</td>
                            <td className="p-3 text-center">
                                <span className={`px-2 py-1 rounded text-sm ${t.status === "approved" ? "bg-green-100 text-green-700" : t.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{t.status}</span>
                            </td>
                            <td className="p-3 text-center space-x-2">
                                <button className="text-green-600" onClick={() => updateStatus(t._id, "approved")}>Approve</button>
                                <button className="text-red-600" onClick={() => updateStatus(t._id, "rejected")}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default TestimonialsManager;