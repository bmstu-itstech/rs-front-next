'use client';
import Contacts from './pages/Contacts';
import Image from 'next/image';
import News from './pages/News';
import { usecase_default } from './components/Carousel/Carousel.usecase';
import { TitleBlock } from "../components/widgets";
import Fullscreen from "../components/shared/Fullscreen";
import { InfoBlock } from "../components/features";

function Home() { // TODO: объединить с Home
  return (
    <>
    <Fullscreen background="/backgrounds/1st.png" needsTopShadow needsBottomShadow>
      <TitleBlock />
    </Fullscreen>
    <Fullscreen background="/backgrounds/2nd.png" needsTopShadow>
        <News
            title="НОВОСТИ" {...usecase_default}
        />
    </Fullscreen>
    <AchievementsBlock list={undefined}/>
    <Fullscreen background="/backgrounds/4th.png" />
    <Contacts/>
    </>
  );
};
