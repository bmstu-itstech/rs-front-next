import { EventsCarousel } from "../../features";
import { IEvent } from "../../types";
import "./style.css";
import { memo } from "preact/compat";

const data: IEvent[] = [
  {
    id: "1",
    title: "Хардатон «Инженерный вызов»",
    description: `
      Подробное описание того, что за мероприятие,
      зачем оно нужно и почему оно важно
    `,
    photos: "",
    mentions: "",
    docs: "",
    date: "20.01.2025",
    place: "https://maps.yandex.ru"
  },
  {
    id: "2",
    title: "Хардатон «Инженерный вызов 2»",
    description: `
      Подробное описание того, что за мероприятие,
      зачем оно нужно и почему оно важно
    `,
    photos: "",
    mentions: "",
    docs: "",
    date: "20.01.2025",
    place: "https://maps.yandex.ru"
  },
];

function EventsScreen() {

  return (
    <div class="events-screen">
      <EventsCarousel items={data} itemsPerSlide={1} />
    </div>
  );

};

export default memo(EventsScreen);
