'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { TSlide } from '@/types/mainPage';
import { HtmlBlock } from '@/components/ui/HtmlBlock';
import { API_URL } from '@/constants/api';
import s from './styles.module.scss';

type SliderProps = {
  slides: TSlide[];
};

export const Slider = ({ slides = [] }: SliderProps) => {
  return (
    <section className={s.slider}>
      <div className={`${s.slider__container} container`}>
        <Swiper
          className={s.slider__swiper}
          slidesPerView={1}
          loop
          speed={700}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className={s.slider__slide}>
              <HtmlBlock className={s.slider__title} as="h2" content={slide.title} />
              <Image
                src={`${API_URL}${slide.image.url}`}
                alt={slide.image.name}
                width={1280}
                height={1280}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
