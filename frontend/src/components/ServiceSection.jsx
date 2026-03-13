import ServiceCard from "./ServiceCard";
import {motion} from 'framer-motion';
import {Bird, Rat, Bug, ShieldCheck} from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const ServiceSection = () => {
    const services = [
        {
            title: "Bird Netting",
            slug: "bird-netting",
            featured: true,
            icon: <Bird size={28}/>,
            description: "Professional bird net installation to protect buildings and homes from pigeon infestation."
        },
        {
            title: "General Pest Control",
            slug: "general-pest-control",
            icon: <ShieldCheck size={28}/>,
            description: "Comprehensive pest control services for homes and businesses."
        },
        {
            title: "Rodent Control",
            slug: "rodent-control",
            icon: <Rat size={28}/>,
            description: "Effective rat and rodent removal to keep your property safe and hygienic."
        },
        {
            title: "Bedbug Control",
            slug: "bedbug-control",
            icon: <Bug size={28}/>,
            description: "Advanced treatment methods to eliminate bedbugs completely"
        }
    ];

    return(
        <section className="py-20 bg-gradient-to-b from-green-400 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
                <p className="text-center text-gray-600 mt-4">Professional pest control solutions tailored for homes and businesses.</p>
                <motion.div 
                variants={containerVariants}
                initial= "hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {services.map((service) => (
                        <ServiceCard 
                        key={service.slug}
                        title={service.title}
                        description={service.description}
                        slug={service.slug}
                        featured={service.featured}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
};

export default ServiceSection;