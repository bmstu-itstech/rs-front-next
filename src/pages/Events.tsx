import { memo } from "preact/compat";
import { EventsScreen } from "../screens";

function Events() {

  return (
    <div class="scroll-container">
      <EventsScreen />
    </div>
  );

};

export default memo(Events);
