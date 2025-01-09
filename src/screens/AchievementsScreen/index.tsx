import { memo } from "preact/compat";
import { Container } from "../../shared";

function AchievementsScreen() {

    return (
        <Container id="achievements">
            <div class="achievements">
                <div class="subtitle">Достижения</div>
            </div>
        </Container>
    );

};

export default memo(AchievementsScreen);
