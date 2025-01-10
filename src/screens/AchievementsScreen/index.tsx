import { memo } from "preact/compat";
import { Container } from "../../shared";
import { isMobile } from "../../hooks";

function AchievementsScreen() {

    const mobile = isMobile();

    return (
        <Container id="achievements">
            <div class="achievements">
                <div class="subtitle">{mobile ? 'Успехи' : 'Достижения'}</div>
            </div>
        </Container>
    );

};

export default memo(AchievementsScreen);
