'use client';
import Contacts from './pages/Contacts';
import News from './pages/News';
import {usecase_default} from './components/Carousel/Carousel.usecase';
import {TitleBlock} from './components/widgets';
import Fullscreen from './components/shared/Fullscreen';
import Footer from './components/Footer';

export default function Home() {
  // TODO: объединить с Home
  return (
    <>
      <Fullscreen
        background='/backgrounds/1st.png'
        needsTopShadow
        needsBottomShadow>
        <TitleBlock />
      </Fullscreen>
      <Fullscreen
        background='/backgrounds/2nd.png'
        needsTopShadow
        needsBottomShadow>
        <News title='НОВОСТИ' {...usecase_default} />
      </Fullscreen>
      <Fullscreen
        background='/backgrounds/4th.png'
        needsTopShadow
        needsBottomShadow></Fullscreen>
      {/* достижения */}
      <Fullscreen background='/backgrounds/2nd.png' needsTopShadow>
        <Contacts />
        <Footer val='Developed @ 2023 by ITS tech' />
      </Fullscreen>
    </>
  );
}
