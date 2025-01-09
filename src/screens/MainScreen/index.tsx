import { memo } from "preact/compat";
import { Container, PrimaryButton } from "../../shared";

function MainScreen() {
    
    return (
        <Container id="main">
            <div class="main">
                <div class="title">
                    Центр молодежной робототехники
                </div>
                <div class="caption">
                    Центр Молодежной Робототехники - это инновационное пространство, предназначенное для обучения
                    и развития молодых талантов в области робототехники, искусственного интеллекта и программирования.
                    Наша миссия - предоставить молодежи возможность исследовать и создавать будущее с помощью передовых
                    технологий и творчества. Присоединяйтесь к нам и откройте для себя мир будущего уже сегодня!
                </div>
                <div class="bottom">
                    <PrimaryButton onClick={() => window.scrollTo({
                        top: window.innerHeight * 1.1,
                        behavior: "smooth"
                    })}>Подробнее</PrimaryButton>
                </div>
            </div>
        </Container>
    );

};

export default memo(MainScreen);
