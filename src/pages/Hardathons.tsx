import { memo } from "preact/compat";
import HardathonsScreen from "../screens/HardathonsScreen";

function Hardathons() {

    return (
        <div class="scroll-container">
            <HardathonsScreen />
        </div>
    );

};

export default memo(Hardathons);
