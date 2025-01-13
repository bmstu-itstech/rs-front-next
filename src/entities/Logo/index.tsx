import { memo, MouseEventHandler } from "preact/compat";

interface LogoProps {
    src: string;
    alt: string;
    onClick?: MouseEventHandler<HTMLImageElement>;
};

const Logo: React.FC<LogoProps> = ({ src, alt, onClick }) => {

    return (
        <img
            class="logo"
            src={src}
            alt={alt}
            onClick={onClick}
        />
    );

};

Logo.displayName = "Logo";

export default memo(Logo);
