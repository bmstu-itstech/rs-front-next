import "./style.css";
import { memo } from "preact/compat";

const LeaderCard: React.FC<{}> = () => {

    return (
        <div class="leader-card">
            <div class="title">Балакало Максим</div>
            <div class="subtitle">Руководитель ЦМР</div>
            <div class="desc">+7 (906) 568-96-73</div>
            <div class="desc">maks.balakalo@bmstu.ru</div>
        </div>
    );

};

LeaderCard.displayName = "LeaderCard";

export default memo(LeaderCard);
