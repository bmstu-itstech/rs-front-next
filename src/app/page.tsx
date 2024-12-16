'use client';
import Image from 'next/image';
import News from './pages/News';
import { usecase_default } from './components/Carousel/Carousel.usecase';
export default function Home() {
  return <News {...usecase_default} />;
}
