import "./style.css";
import { memo } from "preact/compat";
import MainTitle from "../../entities/MainTitle";
import { PrimaryButton } from "../../shared";
import LinkField from "../../shared/LinkField";
import { IEvent } from "../../types";

function Event(item: IEvent) {

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
      <PrimaryButton onClick={() => {
        console.log("clicked");
      }}>Подробнее</PrimaryButton>
    </div>
  );

};

export default memo(Event);
