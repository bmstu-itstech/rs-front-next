import { TitleBlock } from "../components/widgets";
import Fullscreen from "../components/shared/Fullscreen";
import { InfoBlock } from "../components/features";

export default function Home() {
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

