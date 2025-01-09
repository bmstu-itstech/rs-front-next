import "./style.css";
import { memo } from "preact/compat";
import { ComponentChildren } from "preact";

function Field({
    title,
    value
}: {
    title: string;
    value: ComponentChildren
}) {

    return (
        <div class="field">
            <div class="key">{title}:</div>
            <div class="value">{value}</div>
        </div>
    )

};

export default memo(Field);
