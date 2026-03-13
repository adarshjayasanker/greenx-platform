import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import User from './user.model.js';
import connectDB from '../../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async() => {
    try{
       await connectDB();
       const existingAdmin = await User.findOne({email: 'admin@greenx.com'});
       if(existingAdmin){
        console.log("Admin already exists");
        process.exit();
       }
       const hashedPassword = await bcrypt.hash('admin123', 10);
       await User.create({
        name: 'Admin',
        email: 'admin@greenx.com',
        password: hashedPassword,
        role: 'ADMIN'
       });
       console.log('Admin Created Successfully');
       process.exit();
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

createAdmin();