import "./style.css";
import { memo } from "preact/compat";

function LinkField({
    title,
    url
}: {
    title: string;
    url: string;
}) {

    return (
        <div
            class="link-field"
            onClick={() => window.location.href = url}
        >
            <div class="title">{title}</div>
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.43079 11.1778C-0.0232942 11.4922 -0.136558 12.1151 0.177808 12.5692C0.492174 13.0233 1.11513 13.1366 1.56921 12.8222L0.43079 11.1778ZM14.9839 3.17888C15.0827 2.63551 14.7223 2.11492 14.1789 2.01613L5.32406 0.40616C4.78068 0.307364 4.2601 0.667768 4.1613 1.21114C4.06251 1.75452 4.42291 2.2751 4.96629 2.3739L12.8372 3.80498L11.4062 11.6759C11.3074 12.2193 11.6678 12.7399 12.2111 12.8387C12.7545 12.9375 13.2751 12.5771 13.3739 12.0337L14.9839 3.17888ZM1.56921 12.8222L14.5692 3.82219L13.4308 2.17781L0.43079 11.1778L1.56921 12.8222Z" fill="white"/>
            </svg>
        </div>
    );

};

export default memo(LinkField);