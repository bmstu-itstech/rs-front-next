import "./style.css";
import { memo } from "preact/compat";

function LeaderCard() {

    return (
        <div class="leader-card">
            <div class="title">Бизиков Валерий</div>
            <div class="subtitle">Руководитель ЦМР</div>
            <div class="desc">+7 (999) 999-99-99</div>
            <div class="desc">bizikov@mail.ru</div>
        </div>
    );

};

export default memo(LeaderCard);
