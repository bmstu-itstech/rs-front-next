import "./style.css";
import { memo } from "preact/compat";
import { Field } from "../../shared";
import LinkField from "../../shared/LinkField";

function ContactCard() {

    return (
        <div class="contact-card-outer">
            <div class="contact-card-inner">
                <div class="block">
                    <Field
                        title="Телефон"
                        value="+7 (800) 555-35-35"
                    />
                    <Field
                        title="Email"
                        value="cmr@bmstu.ru"
                    />
                </div>
                <div class="block">
                    <LinkField
                        title="Политика перс. данных"
                        url="https://bmstu.ru/about/obrabotka-dannyh"
                    />
                </div>
                <div class="block">
                    <LinkField
                        title="Сайт университета"
                        url="https://bmstu.ru/"
                    />
                </div>
                <div class="block">
                    <Field
                        title="Адрес"
                        value={<LinkField
                            title="Схема проезда"
                            url="https://yandex.ru/maps/213/moscow/?ll=37.682269%2C55.765475&mode=poi&poi%5Bpoint%5D=37.680720%2C55.765206&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D128334697512&utm_source=share&z=17"      
                        />}
                    />
                </div>
                <div class="block">
                    105005, г. Москва, Бауманская ул., 57Б, стр. 1
                </div>
                <div class="block">
                    <Field
                        title="Соцсети"
                        value={null}
                    />
                </div>
                <div class="list">
                    <LinkField
                        title="ВКонтакте"
                        url="https://vk.com/robotics_bmstu"
                    />
                    <LinkField
                        title="Телеграм"
                        url="https://t.me/robotics_bmstu"
                    />
                </div>
            </div>
        </div>
    );

};

export default memo(ContactCard);
