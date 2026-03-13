import bcrypt from 'bcryptjs';
import User from './user.model';

const createAdmin = async() => {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await User.create({
        name: "Admin",
        email: "admin@greenx.com",
        password: hashedPassword
    });
    console.log("Admin Created");
};

createAdmin();