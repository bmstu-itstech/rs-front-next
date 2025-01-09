import { useEffect, useState } from "preact/hooks";

export default function isMobile() {

    const [mobile, setMobile] = useState<boolean>(window.innerWidth <= 950);

    useEffect(() => {
        
        const onResize = () => {
            setMobile(window.innerWidth <= 950);
        };

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);

    });

    return mobile;

};
