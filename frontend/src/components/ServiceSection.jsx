import ServiceCard from "./ServiceCard";
import {motion} from 'framer-motion';
import {Bird, Rat, Bug, ShieldCheck} from 'lucide-react';
import { useEffect, useState } from "react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const ServiceSection = ({services}) => {
    return(
        <section className="py-20 bg-gradient-to-b from-green-400 to-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
                <p className="text-center text-gray-600 mt-4">Professional pest control solutions tailored for homes and businesses.</p>
                {services.length > 0 ? <motion.div 
                variants={containerVariants}
                initial= "hidden"
                whileInView="visible"
                viewport={{once: true}}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {services?.map((service) => (
                        <ServiceCard 
                        key={service.slug}
                        title={service.title}
                        description={service.shortDescription}
                        slug={service.slug}
                        featured={service.featured}
                        />
                    ))}
                </motion.div> : <p className="text-sm text-gray-500">Loading...</p>}
            </div>
        </section>
    )
};

export default ServiceSection;