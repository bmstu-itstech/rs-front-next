import "./style.css";
import { memo, MouseEventHandler } from "preact/compat";

interface CardButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const CardButton: React.FC<CardButtonProps> = ({
  label,
  onClick
}) => {

  return (
    <div class="card-button" onClick={onClick}>
      {label}
    </div>
  );

};

export default memo(CardButton);
