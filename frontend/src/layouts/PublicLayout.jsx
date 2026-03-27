import {Outlet} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import WhatsappButton from '../components/WhatsappButton.jsx';
import MobileContactBar from '../components/MobileContactBar.jsx';
import ServiceContext from '../context/ServiceContext.jsx';
import API_BASE_URL from '../config/api.js';
import { LeadProvider} from '../context/LeadContext.jsx';
import LeadModal from '../components/LeadModal.jsx';
import { ToastProvider } from '../context/ToastContext.jsx';

const PublicLayout = () => {

    const CACHE_KEY = "services_cache";

    const [services, setServices] = useState([]);


    const fetchServices = async() => {
        try{
            const cached = localStorage.getItem(CACHE_KEY);
            if(cached){
                const {data, timestamp} = JSON.parse(cached);
                const isValid = Date.now() - timestamp < 1000 * 60 * 10;
                if(isValid){
                    setServices(data);
                }
            }

            const res = await fetch(`${API_BASE_URL}/services`); 
            if(res?.ok){
                const data = await res.json();
                console.log(data);
                setServices(data?.services);
                localStorage.setItem(CACHE_KEY, JSON.stringify({data: data?.services, timestamp: Date.now()}));
           }
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchServices();
    }, [])

    return(
        <ToastProvider>
            <LeadProvider>
                <ServiceContext.Provider value={{services}}>
                    <div className='flex flex-col min-h-screen'>
                        <Navbar/>
                        <main className='flex-grow'>
                            <Outlet/>
                        </main>
                        <Footer/>
                        <WhatsappButton/>
                        <MobileContactBar/>
                        <LeadModal/>
                    </div>
                </ServiceContext.Provider>
            </LeadProvider>
        </ToastProvider>
    )
};

export default PublicLayout;