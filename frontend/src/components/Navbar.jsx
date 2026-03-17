import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { useServices } from "../context/ServiceContext.jsx";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const {services} = useServices();

    console.log(services);
    

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 40){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const featuredService = services.find(s => s.featured);
    const otherServices = services.filter(s => !s.featured);


    return(
        <header className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${scrolled ? 'bg-white/50 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to='/' className="text-3xl font-bold text-green-900">GreenX</Link>
                <nav className="flex items-center space-x-6">
                    <Link to='/' className="hover:text-white">Home</Link>
                    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}> 
                        <button className="hover:text-white font-medium">Services</button>
                        {open && (
                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[720px] z-50">
                                <div className="bg-white shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6 border border-gray-100">
                                    <div className="space-y-3">
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Our Services</p>
                                        {otherServices?.map(service => (
                                            <Link key={service._id} to={`/services/${service.slug}`} className="block p-3 rounded-lg hover:bg-green-50 transition">
                                                <p className="font-semibold text-gray-900">{service.title}</p>
                                                <p className="text-sm text-gray-500">{service.shortDescription.split('. ', 1)}</p>
                                            </Link>
                                        ))}
                                    </div>
                                    {featuredService && (
                                        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-5 flex flex-col justify-between">
                                            <div>
                                                <p className="text-xs text-green-700 font-semibold mb-2 uppercase">Featured</p>
                                                <h3 className="text-lg font-bold text-gray-700">{featuredService.title}</h3>
                                                <p className="text-sm text-gray-700 mt-2">{featuredService.shortDescription}</p>
                                            </div>
                                            <Link to={`/services/${featuredService.slug}`} className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm">Learn More</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to='/gallery' className="hover:text-white">Gallery</Link>
                    <Link to='/contact' className="hover:text-white">Contact</Link>
                </nav>
                <Link to='/request-service' className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Request Service</Link>
            </div>
        </header>
    )
};

export default Navbar;