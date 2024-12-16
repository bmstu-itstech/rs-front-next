'use client';
import type {FC} from 'react';
import Props from './News.props';
import Carousel from '@/components/Carousel';

const News: FC<Props> = ({src, className, ...props}) => {
  return (
    <div
      className={`w-full h-dvh bg-background_image2_08 bg-cover overflow-x-hidden flex flex-col gap-5 py-8  ${className}`}
      {...props}>
      <p className='w-full flex justify-center text-xl_6 leading-xl_6 font-normal'>
        Новости
      </p>
      <Carousel src={src} {...props} />
    </div>
  );
};

export default News;
