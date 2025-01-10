import "./style.css";
import { ComponentChildren } from "preact"
import { memo, useEffect } from "preact/compat";

type Ids = "main"|"news"|"achievements"|"contacts";

function Container({
    id,
    children
}: {
    id: Ids;
    children?: ComponentChildren;
}) {

    useEffect(() => {
        const element = document.getElementById(id) as HTMLElement;
        const observer = new IntersectionObserver((entries, _) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
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
            });
        }, {
        });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div id={id} class="container-outer">
            <div class="container-inner">
                {children}
            </div>
        </div>
    );

};

export default memo(Container);
