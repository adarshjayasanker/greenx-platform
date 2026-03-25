import { Link } from "react-router-dom"

const CTASection = ({openLeadModal}) => {
    return(
        <section className="relative py-24 bg-green-700 text-white overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-screen-500 opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-400 opacity-30 blur-3xl"></div>
            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold leading-right">Protect Your Home From Pests Today</h2>
                <p className="mt-6 text-green-100 text-lg">
                    Book a free inspection with Greenx Pest Control experts and get safe, professional pest treatment for your home or business.
                </p>
                <div className="mt-10 flex justify-center gap-6 flex-wrap">
                    <button onClick={() => openLeadModal({source: "HOME_HERO"})} className='bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700'>Request Inspection</button>
                    <Link to='/contact' className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition">Contact Us</Link>
                </div>
                <p className="mt-8 text-sm text-green-200">Fast Response • Professional Technicians • Affordable Pricing</p>
            </div>
        </section>
    )
};

export default CTASection;