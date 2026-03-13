import asyncHandler from "../../utils/asyncHandler.js";
import loginUser from "./auth.service.js";

const login = asyncHandler(async(req, res) => {
       const {email, password} = req.body;
       const result = await loginUser(email, password);
       res.json(result);
});

export default login;