import type {FC} from 'react';
import Image from 'next/image';
import Props from './Carousel.props';
import CarouselImport from 'react-gallery-carousel';

const Carousel: FC<Props> = ({src, className, ...props}) => {
  return (
    <div
      className={`w-full min-w-full max-w-full h-full min-h-[180px] inline-block md:hidden relative md:static ${className}`}>
      <CarouselImport
        className={`px-7 py-6 rounded-2xl cursor-pointer`}
        hasMediaButton={false}
        hasDotButtons={false}
        hasSizeButtonAtMax='topRight'
        hasSizeButton={false}
        shouldLazyLoad
        shouldSwipeOnMouse
        hasIndexBoard='bottomRight'
        transitionDurationMin={75}
        transitionDurationMax={100}
        hasCaptions={false}
        shouldMinimizeOnClick
        objectFitAtMax='contain'
        objectFit='cover'
        shouldMinimizeOnSwipeDown
        hasThumbnails={false}
        hasRightButton={false}
        hasLeftButton={false}
        hasThumbnailsAtMax={false}
        style={{backgroundColor: 'rgba(0,0,0,0)'}}
        {...props}>
        {src.map((src, index) => {
          return (
            <div key={index}>
              <Image src={src} alt={`${index}`} />
            </div>
          );
        })}
      </CarouselImport>
    </div>
  );
};

export default Carousel;
