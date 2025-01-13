import "./style.css";
import { memo, MouseEventHandler } from "preact/compat";

interface ArrowButtonProps {
    direction?: "right"|"left";
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
    direction = "right",
    onClick = () => {}
}) => {

    return (
        <div
            class={`arrow-button ${direction}`}
            onClick={onClick}
        >
            <img src="/icons/arrow-right.svg" />
        </div>
    );

};

ArrowButton.displayName = "ArrowButton";

export default memo(ArrowButton);
