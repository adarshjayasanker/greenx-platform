import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <aside className="w-64 bg-gray-900 text-white p-6">
            <h2 className="text-xl font-bold mb-8">Greenx Admin</h2>
            <nav className="space-y-4 flex flex-col">
                <Link to='/admin'>Dashboard</Link>
                <Link to='/admin/services'>Services</Link>
                <Link to='/admin/gallery'>Gallery</Link>
                <Link to='/admin/testimonials'>Testimonials</Link>
                <Link to='/admin/leads'>Leads</Link>
            </nav>
        </aside>
    )
};

export default Sidebar;