'use client';
import type {FC} from 'react';
import Props from './Carousel.props';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './Carousel.module.css';
import {CarouselItem} from './components/Images';

const MyCarousel: FC<Props> = ({src, className, ...props}) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className={`${styles.embla}`} {...props}>
      <div className={'overflow-hidden'} ref={emblaRef}>
        <div className={`${styles.embla__container} flex px-8`}>
          {src.map((slide, index) => (
            <div
              className={`${styles.embla__slide} flex justify-center`}
              key={index}>
              <CarouselItem src={slide} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCarousel;
