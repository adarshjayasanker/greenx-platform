import { Outlet } from "react-router-dom";
import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
    return(
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Header/>
                <main className="p-8">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
};

export default AdminLayout;