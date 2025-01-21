import "./style.css";
import { memo } from "preact/compat";
import MainTitle from "../../entities/MainTitle";
import LinkField from "../../shared/LinkField";
import { PrimaryButton } from "../../shared";

function EventsScreen() {

  return (
    <div class="events-screen">
      <MainTitle>Хардатон «Инженерный вызов»</MainTitle>
      <div class="description">
      Хардатон — это всероссийские командные соревнования по робототехнике для студентов высших учебных заведений. Данные соревнования проводятся традиционно каждый год, и этот год не исключение. В этом году Хардатон будет посвящен созданию мобильных роботов для решения определённой задачи. Победители и призеры Хардатона получат ценные призы от организаторов и партнёров соревнований.
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

export default memo(EventsScreen);
