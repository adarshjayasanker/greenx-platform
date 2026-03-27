import { Link } from "react-router-dom";
import {Phone, Mail, MapPin} from 'lucide-react'
import BRAND from "../config/brand.js";

const Footer = () => {
    return(
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-2xl font-bold text-white">{BRAND.fullName}</h3>
                    <p className="mt-4 text-gray-400">Professional pest control services for homes and businesses in Kerela.
                        Safe, effective and affordable pest management solutions.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link to='/services/bird-netting' className="hover:text-white transition">Bird Netting</Link>
                        </li>
                        <li>
                            <Link to='/services/general-pest-control' className="hover:text-white transition">General Pest Control</Link>
                        </li>
                        <li>
                            <Link to='/services/rodent-control' className="hover:text-white transition">Rodent Control</Link>
                        </li>
                        <li>
                            <Link to='/services/bedbug-control' className="hover:text-white transition">BedBug Control</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3">
                        <li>
                            <Link to='/' className="hover:text-white transition">Home</Link>
                        </li>
                        <li>
                            <Link to='/services' className="hover:text-white transition">Services</Link>
                        </li>
                        <li>
                            <Link to='/gallery' className="hover:text-white transition">Gallery</Link>
                        </li>
                        <li>
                            <Link to='/contact' className="hover:text-white transition">Services</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <Phone size={18}/>
                            +91 6238094939
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18}/>
                            greenxpcs@gmail.com
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin size={18}/>
                            Kochi, Kerala
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Greenx Pest Control & Bird Netting Services. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;