import "./style.css";
import { createPortal, memo, useState } from "preact/compat";
import MainTitle from "../../entities/MainTitle";
import { PrimaryButton } from "../../shared";
import LinkField from "../../shared/LinkField";
import { IEvent } from "../../types";
import EventDropdown from "../EventDropdown";

function Event(item: IEvent) {

  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div class="event">
      <MainTitle>{item.title}</MainTitle>
      <div class="description">
        {item.description}
      </div>
      <div class="flex">
        <div class="circle" />
        <LinkField title="Зарегистрироваться" url="" />
      </div>
      <PrimaryButton
        onClick={() => setIsOpened(true)}
      >Подробнее</PrimaryButton>
      {isOpened && createPortal(<EventDropdown
        onClose={() => setIsOpened(false)}
        event={item}
      />, document.getElementById("modal") as HTMLElement)}
    </div>
  );

};

export default memo(Event);
