import "./style.css";
import { ComponentChildren } from "preact"
import { memo, useEffect } from "preact/compat";
import { isMobile } from "../../hooks";

type Ids = "main"|"news"|"achievements"|"contacts";

function Container({
    id,
    children
}: {
    id: Ids;
    children?: ComponentChildren;
}) {

    const mobile = isMobile();

    useEffect(() => {
        const element = document.getElementById(id) as HTMLElement;
        const observer = new IntersectionObserver((entries, _) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const originalOverflow = document.documentElement.style.overflow;
                if (mobile) document.documentElement.style.overflow = "hidden";
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
                if (mobile) setTimeout(() => document.documentElement.style.overflow = originalOverflow, 700);
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

export default memo(Container);
