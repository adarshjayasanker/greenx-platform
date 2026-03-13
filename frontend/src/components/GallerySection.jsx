import { useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const galleryImages = [
  { src: "https://www.balconysafetynetbangalore.co.in/wp-content/uploads/2023/01/durga-pigeon-net-installation-balconies-e1688737142517.jpg", alt: "Bird Netting Installation", title: "Bird Netting Installation", location: "Apartment Balcony - Kochi" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeivkVrzmE7elxsKXxBo4BNxvmHHr5mLZwyw&s", alt: "General Pest Control", title: "General Pest Control", location: "Residential Home" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BfmPNn5Jk8zO1Cte-x9y8W60p-OU56Ma9w&s", alt: "Rodent Control", title: "Rodent Control Treatment", location: "Commercial Building"},
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1wi4POGO2MJHgSaSW7-_w5wkVeOv0Z_fVw&s", alt: "Bedbug Treatment" }
];

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    return(
        <section className="py-24 bg-gradient-to-b from-green-400 to-white text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Our Works</h2>
                <p className="text-gray-600 mt-3">Real Pest Control solutions delivered to customers</p>
                <div className="mt-14">
                    <Swiper modules={[Autoplay, Navigation, Pagination]} autoplay={{delay: 2000, disableOnInteraction: false}} navigation pagination={{clickable: true}}>
                        {galleryImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative">
                                    <img src={img.src} alt={img.title} className="w-full h-[450px] object-cover rounded-xl shadow-xl" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-6 rounded-b-xl">
                                        <h3 className="text-xl font-semibold">{img.title}</h3>
                                        <p className="text-sm text-gray-300">{img.location}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
};

export default GallerySection;