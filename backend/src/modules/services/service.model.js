import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    shortDescription: {
        type: String
    },
    fullDescription: {
        type: String
    },
    heroImage: {
        type: String,
    },
    galleryImages: {
        type: [String]
    },
    featured: {
        type: Boolean,
        default: false
    },  
}, {timestamps: true});

const Service = mongoose.model('Service', serviceSchema);
export default Service;