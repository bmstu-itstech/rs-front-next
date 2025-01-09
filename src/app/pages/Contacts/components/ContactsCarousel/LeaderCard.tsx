import { memo } from "react";
import style from "./LeaderCard.module.css";

function LeaderCard() {

    return (
        <div className={style.leaderCard}>
            <div className={style.leaderTitle}>Балакало Максим</div>
            <div className={style.leaderSubtitle}>Руководитель ЦМР</div>
            <div className={style.leaderDesc}>+7 (906) 568-96-73</div>
            <div className={style.leaderDesc}>maks.balakalo@bmstu.ru</div>
        </div>
    );

};

export default memo(LeaderCard);
