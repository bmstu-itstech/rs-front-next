import "./style.css";
import { memo, MouseEventHandler } from "preact/compat";

function ArrowButton({
    direction = "right",
    onClick = () => {}
}: {
    direction?: "right"|"left";
    onClick?: MouseEventHandler<HTMLDivElement>;
}) {

    return (
        <div
            class={`arrow-button ${direction}`}
            onClick={onClick}
        >
            <img src="/icons/arrow-right.svg" />
        </div>
    );

};

export default memo(ArrowButton);
