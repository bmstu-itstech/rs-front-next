import type {FC} from 'react';
import Props from './News.props';
import Carousel from '@/components/Carousel';
import 'react-gallery-carousel/dist/index.css';

const News: FC<Props> = ({src, className, ...props}) => {
  return (
    <div
      className={`w-full min-w-full max-w-full h-full min-h-[180px] inline-block md:hidden relative md:static${className}`}>
      <Carousel src={src} {...props} />
    </div>
  );
};

export default News;
