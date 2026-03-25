import { useEffect, useState } from "react";
import CTASection from "../components/CTASection.jsx";
import FeaturedService from "../components/FeaturedService.jsx";
import Footer from "../components/Footer.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Hero from "../components/Hero.jsx";
import ServiceCoverageSection from "../components/ServiceCoverageSection.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import WhyChooseSection from "../components/WhyChooseSection.jsx";
import { useServices } from "../context/ServiceContext.jsx";
import { useLead } from "../context/LeadContext.jsx";

const Home = () => {
    const {services} = useServices();
    const {openLeadModal} = useLead();
    return(
        <div>
            <Hero openLeadModal={openLeadModal}/>
            <FeaturedService/>
            <ServiceSection services={services}/>
            <WhyChooseSection/>
            <GallerySection/>
            <TestimonialsSection/>
            <CTASection openLeadModal={openLeadModal}/>
            <ServiceCoverageSection/>
        </div>
    )
};

export default Home;