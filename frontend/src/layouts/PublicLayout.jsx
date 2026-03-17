import {Outlet} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import WhatsappButton from '../components/WhatsappButton.jsx';
import MobileContactBar from '../components/MobileContactBar.jsx';
import ServiceContext from '../context/ServiceContext.jsx';

const PublicLayout = () => {
    const [services, setServices] = useState([]);
    const fetchServices = async() => {
        try{
           const res = await fetch('http://localhost:5000/services/showservices'); 
           if(res?.ok){
            const data = await res.json();
            setServices(data?.services);
           }
        }catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
        fetchServices();
    }, [])
    return(
        <ServiceContext.Provider value={{services}}>
            <div className='flex flex-col min-h-screen'>
                <Navbar/>
                <main className='flex-grow'>
                    <Outlet/>
                </main>
                <Footer/>
                <WhatsappButton/>
                <MobileContactBar/>
            </div>
        </ServiceContext.Provider>
    )
};

export default PublicLayout;