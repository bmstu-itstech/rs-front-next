'use client';
import Image from 'next/image';
import News from './pages/News';
import { usecase_default } from './components/Carousel/Carousel.usecase';
import { TitleBlock } from "../components/widgets";
import Fullscreen from "../components/shared/Fullscreen";
import { InfoBlock } from "../components/features";

function HomeWithHeader() { // TODO: объединить с Home
  return (
    <>
    <Fullscreen background="/backgrounds/1st.png" needsTopShadow needsBottomShadow>
      <TitleBlock />
    </Fullscreen>
    <Fullscreen background="/backgrounds/2nd.png" needsTopShadow>
      <InfoBlock
        title="НОВОСТИ"
        children="News"
      />
    </Fullscreen>
    <Fullscreen background="/backgrounds/3rd.png" />
    <Fullscreen background="/backgrounds/4th.png" />
    </>
  );
};

export default function Home() {
  return <News {...usecase_default} />;
};
