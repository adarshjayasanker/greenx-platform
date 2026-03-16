import { useEffect, useState } from "react";
import ServiceForm from "../../components/admin/ServiceForm";

const ServiceManager = () => {
    const [services, setServices] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const fetchServices = async() => {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/services/showservices', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        setServices(data.services);
    };
    useEffect(() => {
        fetchServices();
    }, []);

    console.log(services);
    

    return(
        <div>
            <div className="flex justify-between mb-6">
                <h1 className="text-2xl font-semibold">Services Manager</h1>
                <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>+ Add Service</button>
            </div>
            <table className="w-full bg-white shadow rounded">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">Title</th>
                        <th className="p-3 text-left">Slug</th>
                        <th className="p-3">Featured</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {services && services.map(service => (
                    <tr key={service._id} className="border-t">
                        <td className="p-3">{service.title}</td>
                        <td className="p-3">{service.slug}</td>
                        <td className="p-3 text-center">
                            {service.featured ? "Yes" : "No"}
                        </td>
                        <td className="p-3 text-center">
                            <button className="text-blue-500 mr-4">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr>
                   ))}
                </tbody>
            </table>
            {showModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-6 overflow-y-auto">
                <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-8">
                    <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">✕</button>
                    <h2 className="text-xl font-semibold mb-6">Create Service</h2>
                    <ServiceForm onSuccess={() => {
                        fetchServices();
                        setShowModal(false);
                    }}/>
                </div>
            </div>
            )}
        </div>
    )
};

export default ServiceManager;