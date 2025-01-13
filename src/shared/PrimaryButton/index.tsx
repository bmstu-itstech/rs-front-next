import "./style.css";
import { ComponentChildren } from "preact";
import { memo, MouseEventHandler } from "preact/compat";

interface PrimaryButtonProps {
    children?: ComponentChildren;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick = () => {}
}) => {

    return (
        <div class="primary-button" onClick={onClick}>
            <div class="caption">
                {children}
            </div>
        </div>
    );

};

PrimaryButton.displayName = "PrimaryButton";

export default memo(PrimaryButton);
