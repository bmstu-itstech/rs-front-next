import "./style.css";
import { memo } from "preact/compat";
import { isMobile } from "../../hooks";

interface MainTitleProps {
  children?: string;
};

const MainTitle: React.FC<MainTitleProps> = ({
  children
}) => {

  const mobile = isMobile();

  return (
    <div
      class="main-title"
    >
      <div class="content">{children}</div>
      {!mobile && <div class="delimiter" />}
    </div>
  );

};

MainTitle.displayName = "MainTitle";

export default memo(MainTitle);
