'use client';
import News from './pages/News';
import { usecase_default } from './components/Carousel/Carousel.usecase';
import {TitleBlock, AchievementsBlock} from "./components/widgets";
import Fullscreen from "./components/shared/Fullscreen";

export default function Home() {
    return (
        <>
            <Fullscreen background="/backgrounds/1st.png" needsTopShadow needsBottomShadow>
                <TitleBlock/>
            </Fullscreen>
            <Fullscreen background="/backgrounds/2nd.png" needsTopShadow>
                <News
                    title="НОВОСТИ" {...usecase_default}
                />
            </Fullscreen>
            <AchievementsBlock list={undefined}/>
            <Fullscreen background="/backgrounds/4th.png"/>
        </>
    );
};
