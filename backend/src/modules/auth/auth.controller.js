import loginUser from "./auth.service.js";

const login = async(req, res) => {
    try{
       const {email, password} = req.body;
       const result = await loginUser(email, password);
       res.json(result);
    }catch(error){
        res.status(401),json({message: error.message});
    }
};

export default login;