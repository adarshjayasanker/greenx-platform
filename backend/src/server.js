import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';


dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async() => {
    console.log('MONGO_URI:', process.env.MONGO_URI)
    try{
       await connectDB();
       app.listen(PORT, () => {
        console.log(`Server running on Port ${PORT}`);
       }) 
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

startServer();