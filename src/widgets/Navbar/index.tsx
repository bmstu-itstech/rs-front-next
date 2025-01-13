import "./style.css";
import { memo, useEffect, useState } from "preact/compat";
import { LogoList } from "../../features";

const Navbar: React.FC<{}> = () => {

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

Navbar.displayName = "Navbar";

export default memo(Navbar);
