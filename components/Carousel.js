'use client'

import { register } from 'swiper/element/bundle'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import Img1 from '../public/assets/images/DSC8936.jpg'
import Img2 from '../public/assets/images/user_1004769020.jpg'
SwiperCore.use([Pagination, Navigation, Autoplay]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image';

export default function Carousel() {
  const imagens = [Img1, Img2];



  const data = [
    { id: '1', image: imagens[0] },
    { id: '2', image: imagens[1] }
];

         // Verifica o tamanho da tela antes de renderizar o Carousel
         if (typeof window !== 'undefined' && window.innerWidth > 1000)
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
           <SwiperSlide key={item.id}>
           <Image
               src={item.image}
               alt='Slider'
               style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
           />
       </SwiperSlide>
        ) )}
        </Swiper>
        </>
    )
}
