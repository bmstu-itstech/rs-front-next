import { memo } from "preact/compat";
import { AchievementsScreen, ContactsScreen, MainScreen, NewsScreen } from "../screens";

const Home: React.FC<{}> = () => {

  return (
    <div class="scroll-container">
      <MainScreen />
      <NewsScreen />
      <AchievementsScreen />
      <ContactsScreen />
    </div>
  );
  
};

Home.displayName = "HomePage";

export default memo(Home);
