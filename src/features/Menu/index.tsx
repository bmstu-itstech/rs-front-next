import "./style.css";
import { memo } from "preact/compat";
import { useState } from "preact/hooks";

function Menu() {

    const [isOpened, setIsOpened] = useState<boolean>(false);

    if (!isOpened) {
        return (
            <img
                class="menu-icon"
                src="/icons/menu-open.svg"
                alt="menu icon"
                onClick={() => setIsOpened(true)}
            />
        );
    };

};

export default memo(Menu);
