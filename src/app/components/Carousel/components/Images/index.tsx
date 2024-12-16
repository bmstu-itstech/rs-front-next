import Image from 'next/image';
import type {FC} from 'react';
import type Props from './Images.props';

const CarouselItem: FC<Props> = ({src, index, className, ...props}) => {
  return (
    <div
      className={`aspect-[10/11] rounded-xl_6 overflow-hidden border-5 border-orange_main flex flex-col ${className}`}
      {...props}>
      <div className='flex-initial h-[42%]'>
        <Image
          src={src}
          width={300}
          height={200}
          alt={`${index}`}
          className='cover'
          style={{
            width: '100%',
            height: '100%',
            objectPosition: 'center',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='bg-orange_main flex justify-center py-1 text-white_abs w-full'>
        <p className='flex w-2/3 items-center justify-center line-clamp-2 text-center'>
          Его величество великий Тимоша, он же Т-Тимоша
        </p>
      </div>
      <div className='w-full px-10 py-6 bg-white h-full'>
        <p className='w-full text-black line-clamp-4 text-lg font-normal'>
          Дорогой дневник, не знаю как описать тимошу в еще более приятном
          свете, чтобы его величество котяра был настолько доволен своими
          рабами, что снизайдет до нас и помурлычит мне на курсовой... Дорогой
          дневник, не знаю как описать тимошу в еще более приятном свете, чтобы
          его величество котяра был настолько доволен своими рабами, что
          снизайдет до нас и помурлычит мне на курсовой...
        </p>
      </div>
    </div>
  );
};

export {CarouselItem};
