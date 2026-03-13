import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return(
        <header className="bg-white shadow-sm p-4 flex justify-between">
            <h1 className="font-semibold text-lg">Admin Dashboard</h1>
            <button className="text-red-500" onClick={logout}>Logout</button>
        </header>
    )
};

export default Header;