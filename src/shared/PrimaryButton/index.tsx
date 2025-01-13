import "./style.css";
import { ComponentChildren } from "preact";
import { memo, MouseEventHandler } from "preact/compat";

function PrimaryButton({
    children,
    onClick = () => {}
}: {
    children?: ComponentChildren;
    onClick?: MouseEventHandler<HTMLDivElement>;
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
