'use client'
// Utilize "import SwiperCore" apenas uma vez, no início do arquivo
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';

// Importe os estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Use SwiperCore.use para adicionar os módulos necessários
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Carousel() {
  const data = [
    { id: '1', image: 'https://pmspa.rj.gov.br/wp-content/uploads/2023/08/DSC8936.jpg' },
    { id: '2', image: 'https://spaceks.net/sites/sudoestefm.com.br/images/slider/user_1004769020.jpg' },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ zIndex: 0 }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}> {/* Adicione a chave (key) para resolver o erro de "react/jsx-key" */}
            <Image
              src={item.image}
              alt='Slider'
              style={{ width: '100%', height: '90vh', objectFit: 'cover', WebkitBackgroundSize: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
