import "./style.css";
import { memo, useEffect, useState } from "preact/compat";
import { Container } from "../../shared";
import { Carousel, NewsList } from "../../features";

function computeCount() {
    const width = window.innerWidth * 0.9;
    return Math.max(1, Math.min(Math.floor(width / 500), 3));
};

function NewsScreen() {

    const [itemsCount, setItemsCount] = useState(computeCount);

    useEffect(() => {
        window.onresize = () => setItemsCount(computeCount);
    }, []);

    return (
        <Container id="news">
            <div class="news">
                <div class="subtitle">Новости</div>
                <div class="news-carousel-container">
                    <Carousel itemsPerSlide={itemsCount} items={[
                        {
                            title: "День программиста",
                            description: "День программиста – настоящая точка притяжения программистов и топовых российских IT-компаний. В течения дня бауманцы смогут узнать всю самую интересную информацию об актуальных профессиях в сфере IT.",
                            actionLabel: "Узнать подробности о мероприятии",
                            actionUrl: "https://vk.com",
                            coverUrl: "/mock/3.jpg"
                        },
                        {
                            title: "Транспорт будущего",
                            description: "Активисты Центра молодежной робототехники посетили Центр «Транспорт будущего», расположенный в Белгородской области.",
                            actionLabel: "Узнать подробности посещения центра",
                            actionUrl: "https://vk.com",
                            coverUrl: "/mock/1.jpg"
                        },
                        {
                            title: "Регистрация на Инженерный вызов 2023",
                            description: "Регистрация на Хардатон продлится до 6 октября. Не упусти свою возможность не только прокачать знания в области БПЛА, но и сразиться с лучшими командами со всей России",
                            actionLabel: "Узнать подробности и зарегистрироваться",
                            actionUrl: "https://vk.com",
                            coverUrl: "/mock/2.jpg"
                        },
                        {
                            title: "Тимоша",
                            description: "Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ",
                            actionLabel: "Чекнуть кота",
                            actionUrl: "https://vk.com",
                            coverUrl: "/mock/cat1.jpg"
                        },
                        {
                            title: "Ещё Тимошка",
                            description: "Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ",
                            actionLabel: "Иван любит Тимошу",
                            actionUrl: "https://vk.com",
                            coverUrl: "/mock/cat2.jpg"
                        },
                        {
                            title: "Тимошечка",
                            description: "Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ",
                            actionLabel: "Подписаться на Тимошу в ВК",
                            actionUrl: "https://vk.com",
                            coverUrl: "/mock/cat3.jpg"
                        },
                        {
                            title: "Тимошуня",
                            description: "Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ Тимоша ашомиТ",
                            actionLabel: "Увидеть Тимошу Тимошевича",
                            actionUrl: "https://vk.com",
                            coverUrl: "/mock/cat4.jpg"
                        },
                    ]} />
                </div>
            </div>
        </Container>
    );

};

export default memo(NewsScreen);
