import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/services/showservices').then(res => res.json()).then(data => setServices(data));
    })
    return(
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-bold text-center">Our Services</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                {services.map(service => (
                    <Link key={service._id} to={`/services/${service.slug}`} className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-gray-600 mt-3">{service.shortDescription}</p>
                    </Link>
                ))}
            </div>
        </div>
    </section>
    )
};

export default Services;