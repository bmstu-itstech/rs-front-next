import "./style.css";
import { memo, MouseEventHandler } from "preact/compat";
import { CardButton } from "../../entities";
import { IEvent } from "../../types";

interface EventDropdownProps {
  onClose: MouseEventHandler<HTMLImageElement>;
  event: IEvent;
};

function EventDropdown({
  onClose,
  event
}: EventDropdownProps) {

  return (
    <div class="event-dropdown-bg" onClick={onClose}>
      <div class="event-dropdown-outer" onClick={(e) => e.stopPropagation()}>
        <div class="event-dropdown-inner">
          <div class="info">
            <div class="title">Подробнее</div>
            <CardButton
              label={`Дата проведения: ${event.date}`}
              onClick={() => {}}
            />
            <CardButton
              label="Место проведения"
              onClick={() => window.location.href = event.place}
            />
            <CardButton
              label="Фото"
              onClick={() => window.location.href = event.photos}
            />
            <CardButton
              label="Упоминания в СМИ"
              onClick={() => window.location.href = event.mentions}
            />
            <CardButton
              label="Документы"
              onClick={() => window.location.href = event.docs}
            />
          </div>
          <div class="action">
            <img src="/icons/close.svg" onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default memo(EventDropdown);
