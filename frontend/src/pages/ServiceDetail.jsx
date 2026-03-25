import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../config/api.js";
import { useLead } from "../context/LeadContext.jsx";

const ServiceDetail = () => {

    const {slug} = useParams();

    const [service, setService] = useState(null);

    const {openLeadModal} = useLead();

    useEffect(() => {
        fetchService();
    }, [slug]);

    const fetchService = async() => {
        try{
           const result = await fetch(`${API_BASE_URL}/services/slug/${slug}`);
           if(result.ok){
            const data = await result.json();
            setService(data);
           }
        }catch(error){
            console.error(error)
        }
    }

    console.log(service);
    

    return(
        <div className="bg-gradient-to-b from-white to-green-400 pt-32 pb-24">
            <section className="relative h-[75vh] overflow-hidden">
                <img src={service?.heroImage} alt="" className="w-full h-full object-cover scaler-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
                    <div className="max-w-6xl mx-auto px-6 text-white">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">{service?.title}</h1>
                        <p className="mt-6 text-lg md:text-xl max-w-xl text-gray-200">{service?.shortDescription}</p>
                        <button className="mt-8 bg-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg hover:scale-105" onClick={() => openLeadModal({
                        serviceId: service?._id,
                        source: "SERVICE_PAGE",
                    })}>Request Service Now</button>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">About this Service</h2>
                    <div className="w-20 h-1 bg-green-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed text-lg">{service?.fullDescription}</p>
                </div>
            </section>
            <section className="py-20 ">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Safe & Effective",
                            desc: "Designed to eliminate pests without harming your environment"
                        },
                        {
                            title: "Long Lasting",
                            desc: "Durable solutions that provide long-term protection."
                        },
                        {
                            title: "Professional Service",
                            desc: "Expert technicians ensuring quality installation"
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-1">
                            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 mt-3">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            {service?.galleryImages && (
                <section className="py-24">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Project Gallery</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {service.galleryImages?.map((img, i) => (
                                <div key={i} className="overflow-hidden rounded-xl group">
                                    <img src={img} alt="" className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold">Need This Service?</h2>
                    <p className="mt-4 text-lg text-green-100">Get Professional help from Greenx experts today.</p>
                    <button className="mt-8 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:scale-105" onClick={() => openLeadModal({
                        serviceId: service?._id,
                        source: "SERVICE_PAGE",
                    })}>Request Service Now</button>
                </div>
            </section>
        </div>
    )
};

export default ServiceDetail;