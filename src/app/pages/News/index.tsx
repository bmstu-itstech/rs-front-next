'use client';
import type {FC} from 'react';
import Props from './News.props';
import Carousel from '@/components/Carousel';
import PageLayout from '@/app/layouts/Page';

const News: FC<Props> = ({src, className, ...props}) => {
  return (
    <PageLayout title='Новости' className={className} {...props}>
      <Carousel src={src} />
    </PageLayout>
  );
};

export default News;
