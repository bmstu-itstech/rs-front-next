import "./style.css";
import { memo, useCallback, useState } from "preact/compat";
import { Container } from "../../shared";
import { isMobile } from "../../hooks";
import { Achievement } from "../../features";
import { IAchievement } from "../../types/Achievement";

const achievements: IAchievement[] = [
    {
        title: "Победители «Боя роботов» 1,5 кг",
        id: "1",
        description: `Команда «Гурманы» одержала серию из 5 побед битв
        Robot Fight Club, что дало им звание чемпионов 23 сезона. Команда
        выступила с роботом «Lilcheese» весом 1,5 кг и вооружённого барабанным спиннером`,
        photoUrl: "#",
        mediaUrl: "#",
        coverUrl: "/mock/achievement_1.png"
    },
    {
        title: "Призёры Скат 2024",
        id: "2",
        description: `Команда «Покорители Неба» стала призёром всероссийский соревнований СКАТ2024.
        Ребята спроектировали и изготовили БПЛА на базе ЦМР.
        Летательный аппарат успешно выполнил задание и занял третье место основного трека.`,
        photoUrl: "#",
        mediaUrl: "#",
        coverUrl: "/mock/achievement_2.png"
    },
    {
        title: "«АэроТех»",
        id: "3",
        description: `Проект направлен на развитие студенческого научно-технического творчества в сфере
        беспилотных летательных аппаратов и предполагает создание специализированной площадки для обучения
        работе с БПЛА и проведения лекций.`,
        photoUrl: "#",
        mediaUrl: "#",
        coverUrl: "/mock/achievement_3.png"
    },
    {
        title: "Хардатон «Инженерный вызов»",
        id: "4",
        description: "В этом году участие приняли 11 лучших команд Бауманки и МТКП, которые на практике показали, что могут студенты лучшего технического университета.",
        photoUrl: "#",
        mediaUrl: "#",
        coverUrl: "/mock/achievement_4.jpg"
    }
];

function AchievementsScreen() {

    const mobile = isMobile();
    const [active, setActive] = useState("1");

    const handleActive = useCallback((newId: string) => {
        console.log("tr");
        let originalIndex = achievements.findIndex(v => v.id === newId);
        let activeIndex = achievements.findIndex(v => v.id === active);
        [achievements[originalIndex], achievements[activeIndex]] = [achievements[activeIndex], achievements[originalIndex]];
        setActive(newId);
    }, [mobile, active]);

    return (
        <Container id="achievements">
            <div class="achievements">
                <div class="subtitle">Достижения</div>
                <div class="subcontainer">
                    <Achievement
                        key={active}
                        {...achievements[0]}
                    />
                    <div class="list">
                        {achievements.filter(v => v.id !== active).map(v => <Achievement compact {...v} key={v.id} onClick={() => handleActive(v.id)} />)}
                    </div>
                </div>
            </div>
        </Container>
    );

};

export default memo(AchievementsScreen);
