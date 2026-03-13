import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import TestimonialModal from './TestimonialModal';

const testimonials = [
        {
            name: "Rahul Nair",
            message: "Greenx solved our pigeon problem quickly with professional bird netting installation."
        },
        {
            name: "Anita Joseph",
            message: "Very effective pest control service. The technicians were professional and friendly."
        },
        
        {
            name: "Rahul Nair",
            message: "Greenx solved our pigeon problem quickly with professional bird netting installation."
        },
        {
            name: "Anita Joseph",
            message: "Very effective pest control service. The technicians were professional and friendly."
        },
        {
            name: "Rahul Nair",
            message: "Greenx solved our pigeon problem quickly with professional bird netting installation."
        },
        {
            name: "Anita Joseph",
            message: "Very effective pest control service. The technicians were professional and friendly."
        },
        
        {
            name: "Rahul Nair",
            message: "Greenx solved our pigeon problem quickly with professional bird netting installation."
        },
        {
            name: "Anita Joseph",
            message: "Very effective pest control service. The technicians were professional and friendly."
        },
        
    ];


const TestimonialsSection = () => {
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal);
    
    if(openModal) return <TestimonialModal isOpen={true} onClose={() => setOpenModal(false)}/>
    return(
        <section className="py-24 bg-gradient-to-b from-white to-green-400">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
                <p className='text-gray-600 mt-3'>Trusted by Homes and Businesses across Kerala</p>
                <div className="mt-14">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        autoplay={{delay: 2000}}
                        className='pb-16'
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index} className='h-auto'>
                                <div className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-left h-full flex flex-col justify-between'>
                                    <p className='text-gray-600 leading-relaxed'>"{t.message}"</p>
                                    <div className='mt-6'>
                                        <p className='font-semibold text-green-600'>{t.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className='text-center mt-10'>
                <button onClick={() => setOpenModal(true)} className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700'>Leave a Review</button>
            </div>
        </section>
        
    )
};

export default TestimonialsSection