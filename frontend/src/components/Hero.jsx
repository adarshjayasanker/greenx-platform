import { Link } from "react-router-dom";
import GoogleRating from "./GoogleRating";

const Hero = () => {
    return(
        <section className="bg-gradient-to-b from-green-400 to-white pt-45 pb-24">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Professional Pest Control & Bird Netting Services in Kerala</h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Safe, effective and affordable pest control solutions for homes and businesses.
                        Protect your family and property with expert treatment from GreenX.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Link to='/request-service' className='bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700'>Request Inspection</Link>
                        <Link to='/contacte' className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-100">Contact Us</Link>
                    </div>
                    <GoogleRating/>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" alt="Pest Control Service" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    )
};

export default Hero;