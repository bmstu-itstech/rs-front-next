'use client';
import type {FC} from 'react';
import Props from './News.props';
import Carousel from '@/components/Carousel';

const News: FC<Props> = ({src, className, ...props}) => {
  return (
    <div
      className={`w-full h-dvh bg-background_image2 bg-cover overflow-x-hidden flex flex-col gap-5 py-8 ${className}`}
      {...props}>
      <div className='absolute inset-0 bg-black bg-opacity-80 -z-0' />
      <p className='w-full flex justify-center text-6xl leading-6xl z-10 font-normal'>
        Новости
      </p>
      <Carousel src={src} {...props} />
    </div>
  );
};

export default News;
