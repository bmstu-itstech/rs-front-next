import "./style.css";
import { memo } from "preact/compat";
import { ComponentChildren } from "preact";

interface FieldProps {
    title: string;
    value: ComponentChildren
};

const Field: React.FC<FieldProps> = ({
    title,
    value
}) => {

    return (
        <div class="field">
            <div class="key">{title}:</div>
            <div class="value">{value}</div>
        </div>
    )

};

Field.displayName = "Field";

export default memo(Field);
