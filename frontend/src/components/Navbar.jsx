import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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
    }, [])
    return(
        <header className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${scrolled ? 'bg-white/50 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to='/' className="text-3xl font-bold text-green-900">GreenX</Link>
                <nav className="flex items-center space-x-6">
                    <Link to='/' className="hover:text-white">Home</Link>
                    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                        <button className="hover:text-white"><Link to='/services'>Services</Link></button>
                        {open && (
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded">
                                <Link to='/services/termite-control' className="block px-4 py-2 hover:bg-gray-100">Termite Control Service</Link>
                                <Link to='/services/general-pest-control' className="block px-4 py-2 hover:bg-gray-100">General Pest Control Service</Link>
                                <Link to='/services/rodent-control' className="block px-4 py-2 hover:bg-gray-100">Rodent Control Service</Link>
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