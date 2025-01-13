import "./style.css";
import { memo } from "preact/compat";
import { useState } from "preact/hooks";

const Menu: React.FC<{}> = () => {

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
