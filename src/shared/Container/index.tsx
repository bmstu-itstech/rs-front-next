import "./style.css";
import { ComponentChildren } from "preact"
import { memo, useEffect } from "preact/compat";
import { isMobile } from "../../hooks";

type Ids = "main"|"news"|"achievements"|"contacts";

interface ContainerProps {
    id: Ids;
    children?: ComponentChildren;
};

const Container: React.FC<ContainerProps> = ({
    id,
    children
}) => {

    const mobile = isMobile();

    useEffect(() => {
        const element = document.getElementById(id) as HTMLElement;
        const observer = new IntersectionObserver((entries, _) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (mobile) document.documentElement.style.overflowY = "hidden";
                if (id === "main") {
                    requestAnimationFrame(() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    });
                } else {
                    requestAnimationFrame(() => {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    });
                };
                setTimeout(() => document.documentElement.style.overflowY = "scroll", 700);
            });
        }, {
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, [mobile]);

    return (
        <div id={id} class="container-outer">
            <div class="container-inner">
                {children}
            </div>
        </div>
    );

};

Container.displayName = "Container";

export default memo(Container);
