import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String
    },
    location: {
        type: String
    },
    serviceRequested: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    message: {
        type: String,
    },
    source: {
        type: String,
        default: "website"
    },
    status: {
        type: String,
        enum: ["NEW", "CONTACTED", "QUOTED", "CONVERTED", "CLOSED"],
        default: "NEW"
    }
}, {timestamps: true});

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;