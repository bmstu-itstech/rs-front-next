import { memo } from "preact/compat";

function Logo({
    src,
    alt,
    onClick
}: {
    src: string;
    alt: string;
    onClick?: () => void;
}) {

    return (
        <img
            class="logo"
            src={src}
            alt={alt}
            onClick={onClick}
        />
    );

};

export default memo(Logo);
