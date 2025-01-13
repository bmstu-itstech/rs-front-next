import "./style.css";
import { memo } from "preact/compat"

const Footer: React.FC<{}> = () => {

    return (
        <div class="footer-outer">
            <div class="footer-inner">
                <div class="text">Developed @ 2025 by ITS Tech</div>
            </div>
        </div>
    )

};

Footer.displayName = "Footer";

export default memo(Footer);
