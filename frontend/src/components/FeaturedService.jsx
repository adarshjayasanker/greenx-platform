import { Link } from "react-router-dom"
import {motion} from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25
        }
    }
};
const imageVariants = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0
    }
};
const textVariants = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    visible: {
        opacity: 1,
        x: 0
    }
};

const FeaturedService = () => {
    return(
         <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: '-100px'}}
            className="py-24 bg-gradient-to-b from-white to-green-400">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                variants={imageVariants}
                transition={{duration: 0.8, ease: "easeOut"}}
                whileHover={{scale: 1.03}}
                className="relative">
                    <img src="https://media.gettyimages.com/id/1281603928/photo/image-of-gardener-hand-pruning-plant-in-raised-vegetable-beds-on-residential-balcony.jpg?s=1024x1024&w=gi&k=20&c=NKqO3Ecn3TmSVh4OuwnDmGS4EyFp86wO1xAgChXL-Zo=" alt="BirdNetting" className="rounded-xl shadow-xl" />
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-200 blur-3xl opacity-40"></div>
                </motion.div>
                <motion.div
                variants={textVariants}
                transition={{duration: 0.8, ease: "easeOut"}}>
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium text-sm">
                        Featured Service
                    </span>
                    <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mt-5 leading-tight">Professional Bird Netting Solutions</h2>
                    <p className="text-gray-600 mt-6 text-lg">
                        Bird Netting is one of the most popular methods used from excluding pest birds from all types of objects, openings and structures as one net can be used to protect many perching places. Bird Netting is the most cost effective solution.
                        GreenX is one of the top notch companies providing efficient and affordable netting solutions for Residential, Commercial industrial projects.
                        Our skilled proffesionals will help you in having your premises Free from the menace of birds and bird droppings.
                    </p>
                    <ul className="mt-8 space-y-3 text-gray-700">
                        <li>✔ Long-lasting UV resistant nets</li>
                        <li>✔ Safe for birds and environment</li>
                        <li>✔ Ideal for apartments and commercial buildings</li>
                    </ul>
                    <div className="mt-10 flex gap-4">
                        <Link to='/services/bird-netting' className="inline-block mt-8 bg-green-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Learn More</Link>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
};

export default FeaturedService;