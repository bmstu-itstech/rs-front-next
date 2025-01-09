import "./style.css";
import { ComponentChildren } from "preact";
import { memo } from "preact/compat";

function PrimaryButton({
    children,
    onClick = () => {}
}: {
    children?: ComponentChildren;
    onClick?: () => void;
}) {

    return (
        <div class="primary-button" onClick={onClick}>
            <div class="caption">
                {children}
            </div>
        </div>
    );

};

export default memo(PrimaryButton);
