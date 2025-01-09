import "./style.css";
import { useState, useCallback, useEffect, useMemo } from 'preact/hooks';
import useEmblaCarousel from 'embla-carousel-react';
import { INewsItem } from '../../types';
import { NewsItem } from '../../entities';
import { memo } from "preact/compat";

function createGroup<T>(arr: T[], count: number): T[][] {
    if (count <= 0) {
      throw new Error("Count must be a positive number.");
    }
  
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += count) {
      result.push(arr.slice(i, i + count));
    }
    return result;
  }

const Carousel = ({ items, itemsPerSlide = 3 }: {
    items: INewsItem[],
    itemsPerSlide: number;
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Group slides using createGroup and useMemo
    const groupedSlides = useMemo(() => {
        return createGroup(items, itemsPerSlide);
    }, [items, itemsPerSlide]);


    const handleSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
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
        <div className="carousel">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {groupedSlides.map((slideGroup, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide-container">
                                {slideGroup.map((slide, idx) => <NewsItem {...slide} key={idx} />)}
                            </div>
                        </div>
                    ))}
                </div>
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

export default memo(Carousel);
