import {ShieldCheck, Clock, BadgeCheck, Leaf} from 'lucide-react';

const WhyChooseSection = () => {
    const features = [
        {
            icon: <ShieldCheck size={36}/>,
            title: "Safe & Certified Treatments",
            description: "Eco-friendly pest control methods that are safe for families and pets."
        },
        {
            icon: <Clock size={36}/>,
            title: "Fast Response",
            description: "Quick inspection and rapid treatment for urgent pest infestations."
        },
        {
            icon: <BadgeCheck size={36}/>,
            title: "Experienced Technicians",
            description: "Skilled professionals trained in modern pest control techniques."
        },
        {
            icon: <Leaf size={36}/>,
            title: "Affordable & Effective",
            description: "High-quality pest control services at competitive pricing."
        }
    ];

    return(
        <section className='py-20 bg-gradient-to-b from-white to-green-400'>
            <div className='max-w-7xl mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center text-gray-900'>Why Choose GreenX</h2>
                <p className='text-center text-gray-600 mt-4'>Reliable pest control solutions trusted by homes and businesses</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14'>
                    {features.map((feature, index) => (
                        <div key={index} className='text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition'>
                            <div className='text-green-600 flex justify-center mb-4'>{feature.icon}</div>
                            <h3 className='font-semibold text-lg'>{feature.title}</h3>
                            <p className='text-gray-600 mt-3'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default WhyChooseSection