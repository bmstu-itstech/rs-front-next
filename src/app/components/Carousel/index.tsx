'use client';
import type {FC} from 'react';
import Props from './Carousel.props';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './Carousel.module.css';
import {CarouselItem} from './components/Images';
import {imageDefault} from './components/Images/Images.usecase';
import ProgressBar, {useSelectedSnapDisplay} from './components/ProgressBar';

const MyCarousel: FC<Props> = ({src, className, ...props}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {selectedSnap, snapCount} = useSelectedSnapDisplay(emblaApi);

  return (
    <>
      <section
        className={`${styles.embla} gap-6 flex flex-col w-full`}
        {...props}>
        <div className={'overflow-hidden'} ref={emblaRef}>
          <div className={`${styles.embla__container} flex px-8`}>
            {src.map((slide, index) => (
              <div
                className={`${styles.embla__slide} flex justify-center`}
                key={index}>
                <CarouselItem src={slide} index={index} {...imageDefault} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProgressBar selectedSnap={selectedSnap} snapCount={snapCount} />
    </>
  );
};

export default MyCarousel;
