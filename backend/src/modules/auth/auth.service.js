import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './user.model.js';
import generateToken from '../../utils/generateToken.js';

const loginUser = async(email, password) => {
    const user = await User.findOne({email});
    if(!user) throw new Error("Invalid credentials");
    if (user.role !== "ADMIN") throw new Error("Not authorized");
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Invalid credentials");
    const token = generateToken(user._id);
    return{
        token,
        user : {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    }
};

export default loginUser;