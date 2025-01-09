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

    useEffect(() => {
        const element = document.getElementById(id) as HTMLElement;
        const observer = new IntersectionObserver((entries, _) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                document.ontouchmove = (e) => e.preventDefault();
                if (id === "main") {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                } else {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                };
                document.ontouchmove = undefined;
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
