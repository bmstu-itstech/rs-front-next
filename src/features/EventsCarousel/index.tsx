import { useState, useCallback, useEffect, useMemo } from 'preact/hooks';
import useEmblaCarousel from 'embla-carousel-react';
import { IEvent } from '../../types';
import { memo } from "preact/compat";
import Event from "./Event";
import { ArrowButton } from '../../shared';
import { isMobile } from '../../hooks';

function createGroup<T>(arr: T[], count: number): T[][] {
    if (count <= 0) {
      throw new Error("Count must be a positive number.");
    }
  
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += count) {
      result.push(arr.slice(i, i + count));
    }
    return result;
};

interface CarouselProps {
    items: IEvent[],
    itemsPerSlide: number;
};

const Carousel: React.FC<CarouselProps> = ({ items, itemsPerSlide = 3 }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const mobile = isMobile();
    
    const groupedSlides = useMemo(() => {
        return createGroup(items, itemsPerSlide);
    }, [items, itemsPerSlide]);


    const handleSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);


    useEffect(() => {
        if (!emblaApi) return;
        handleSelect();

      emblaApi.on('select', handleSelect);
      emblaApi.on('pointerUp', handleSelect);


        return () => {
         emblaApi.off('select', handleSelect);
          emblaApi.off('pointerUp', handleSelect);
        };
    }, [emblaApi, handleSelect]);

  const scrollToIndex = (index: number) => {
    if(!emblaApi) return;
      emblaApi.scrollTo(index);
    }

    if(!items.length) return null;

    return (
        <div className="carousel events-carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {groupedSlides.map((slideGroup, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide-container" style="width:75vw;">
                                {slideGroup.map((slide) => (
                                  <div class="event-container">
                                    <Event {...slide} key={slide.id} />
                                  </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div class="events-button-left">
              {!mobile && <ArrowButton direction="left" onClick={() => emblaApi?.scrollPrev()} />}
            </div>
            <div class="events-button-right">
              {!mobile && <ArrowButton direction="right" onClick={() => emblaApi?.scrollNext()} />}
            </div>
            <div className="carousel__dots">
                {emblaApi?.scrollSnapList().map((_,index) => {
                    return <button className={`carousel__dot ${selectedIndex === index? 'carousel__dot--selected': ''}`}
                                   key={index}
                                   onClick={() => scrollToIndex(index)}
                    />
                })}
            </div>
        </div>
    );
};

Carousel.displayName = "Carousel";

export default memo(Carousel);
