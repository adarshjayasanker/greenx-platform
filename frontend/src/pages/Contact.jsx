import LeadForm from "../components/LeadForm.jsx";
import BRAND from "../config/brand.js";

const Contact = () => {
    return(
        <div className="pt-32 pb-24 bg-gradient-to-b from-green-400 to-white">
            <section className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact {BRAND.displayName}</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Get in touch with our experts for pest control and bird netting solutions.
                    We respond quickly and provide safe, effective service.
                </p>
            </section>
            <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <LeadForm/>
                </div>
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <p className="text-gray-600 mt-2">Speak directly with our team</p>
                        <a href="tel:+918714205474" className="inline-block mt-4 text-green-600 font-medium">+91 87142 05474</a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg">WhatsApp</h3>
                        <p className="text-gray-600 mt-2">Quick response via WhatsApp</p>
                        <a href="https://wa.me/918714205474" target="_blank" className="inline-block mt-4 text-green-600 font-medium">Chat Now</a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-600 mt-2">Send us your enquiry</p>
                        <a href="mailto:greenxpcs@gmail.com" className="inline-block mt-4 text-green-600 font-medium">greenxpcs@gmail.com</a>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-6 mt-20">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <iframe src="https://maps.google.com/maps?q=kochi&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-80 border-0" loading="lazy"/>
                    <div className="p-6">
                        <h3 className="font-semibold text-lg">{BRAND.fullName}</h3>
                        <p className="text-gray-600 mt-2">
                            Serving across Kerala with professional pest control & bird netting solutions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Contact;