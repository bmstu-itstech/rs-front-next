import "./style.css";
import { useLocation } from "preact-iso";
import { Logo } from "../../entities";
import { memo } from "preact/compat";

const LogoList: React.FC<{}> = () => {

    const location = useLocation();

    return (
        <div class="logo-list">
            <Logo
                src="./logo/bmstu.svg"
                alt="logo of university"
                onClick={() => window.location.href = "https://bmstu.ru"}
            />
            <Logo
                src="./logo/crown.svg"
                alt="logo of company"
                onClick={() => location.route("/404")}
            />
            <Logo
                src="./logo/rs.svg"
                alt="logo of robotics center"
                onClick={() => location.route("/")}
            />
        </div>
    );

};

LogoList.displayName = "LogoList";

export default memo(LogoList);
