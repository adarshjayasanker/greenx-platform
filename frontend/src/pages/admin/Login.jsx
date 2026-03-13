import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
           const res = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
           });
           const data = await res.json();
           console.log(data);
           
           if(data){
             localStorage.setItem('token', data.token);
             navigate('/admin');
           } 
        }catch(error){
            console.error(error);
            alert(data.message);
        }
    }
    return(
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
                <input type="email" placeholder="Email" className="w-full border p-3 mb-4" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" className="w-full border p-3 mb-6" onChange={(e) => setPassword(e.target.value)} />
                <button className="w-full bg-green-600 text-white py-3 rounded-lg">Login</button>
            </form>
        </div>
    )
};

export default Login;