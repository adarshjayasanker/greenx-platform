import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import WhatsappButton from '../components/WhatsappButton.jsx';
import MobileContactBar from '../components/MobileContactBar.jsx';

const PublicLayout = () => {
    return(
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <main className='flex-grow'>
                <Outlet/>
            </main>
            <Footer/>
            <WhatsappButton/>
            <MobileContactBar/>
        </div>
    )
};

export default PublicLayout;