'use client'

import { register } from 'swiper/element/bundle'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Navigation, Autoplay]);
register()
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react'
export default function Carousel() {

    const data = [
        { id: '1', image: 'https://pmspa.rj.gov.br/wp-content/uploads/2023/08/DSC8936.jpg' },
        { id: '2', image: 'https://spaceks.net/sites/sudoestefm.com.br/images/slider/user_1004769020.jpg' }
    ]


    return(
        <>
        <Swiper
        slidesPerView={1}
        pagination={{ clickable: true}}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ zIndex: 0 }}
        >
        {data.map( (item) => (
            <SwiperSlide>
                <img
                src={item.image}
                alt='Slider'
                style={{ width: '100%', height: '90vh', objectFit: 'cover', WebkitBackgroundSize: 'cover'}}
                />
            </SwiperSlide>
        ) )}
        </Swiper>
        </>
    )
}
