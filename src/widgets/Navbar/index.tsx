import "./style.css";
import { memo, useEffect, useState } from "preact/compat";
import { LogoList, Menu } from "../../features";

function Navbar() {

    const [opacity, setOpacity] = useState("1");

    useEffect(() => {
        window.onscroll = () => {
            setOpacity(window.scrollY > 0 ? "0" : "1");
        };
    }, []);

    return (
        <div class="navbar-outer">
            <div class="navbar-inner">
                <div class="logo-outer" style={{ opacity }}>
                    <LogoList />
                </div>
                {/*<Menu />*/}
            </div>
        </div>
    );

};

export default memo(Navbar);
