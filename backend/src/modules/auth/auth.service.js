import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './user.model.js';

const loginUser = async(email, password) => {
    const user = await User.findOne({email});
    if(!user) throw new Error("Invalid credentials");
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Invalid credentials");
    const token = jwt.sign(
        {
        id: user._id, 
        role: user.role
        }, 
        process.env.JWT_SECRET,
        {
        expiresIn: "7d"
        }
    );
    return(
        user, token
    );
};

export default loginUser;