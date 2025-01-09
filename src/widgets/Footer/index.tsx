import "./style.css";
import { memo } from "preact/compat"

function Footer() {

    return (
        <div class="footer-outer">
            <div class="footer-inner">
                <div class="text">Developed @ 2025 by ITS Tech</div>
            </div>
        </div>
    )

};

export default memo(Footer);
