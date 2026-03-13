import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

const ServiceCard = ({icon, title, description, slug, featured}) => {
    return(
        <motion.div 
        variants={cardVariants}
        transition={{duration: 0.5}}
        whileHover={{y: -8}}
        className={`rounded-xl p-6 transform transition duration-300 ${featured ? "bg-green-600 text-white scale-105 shadow-xl" : "bg-white shadow-md hover:-translate-y-2 hover:shadow-xl"}`}>
            {featured && (
                <span className="inline-block mb-3 text-sm bg-white text-green-600 px-3 py-1 rounded">Most Popular</span>
            )}
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className={`mt-3 ${featured ? "text-green-100" : "text-gray-600"}`}>{description}</p>
            <Link to={`/services/${slug}`} className={`inline-block mt-4 font-medium ${featured ? "text-white underline" : "text-green-600 hover:underline"}`}>Learn More</Link>
        </motion.div>
    )
};

export default ServiceCard;