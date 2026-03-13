import CTASection from "../components/CTASection.jsx";
import FeaturedService from "../components/FeaturedService.jsx";
import Footer from "../components/Footer.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Hero from "../components/Hero.jsx";
import ServiceCoverageSection from "../components/ServiceCoverageSection.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import WhyChooseSection from "../components/WhyChooseSection.jsx";

const Home = () => {
    return(
        <div>
            <Hero/>
            <FeaturedService/>
            <ServiceSection/>
            <WhyChooseSection/>
            <GallerySection/>
            <TestimonialsSection/>
            <CTASection/>
            <ServiceCoverageSection/>
        </div>
    )
};

export default Home;