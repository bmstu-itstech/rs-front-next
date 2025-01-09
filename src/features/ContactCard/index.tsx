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
                        url="https://google.com"
                    />
                </div>
                <div class="block">
                    <LinkField
                        title="Сайт университета"
                        url="https://google.com"
                    />
                </div>
                <div class="block">
                    <Field
                        title="Адрес"
                        value={<LinkField
                            title="Схема проезда"
                            url="https://google.com"      
                        />}
                    />
                </div>
                <div class="block">
                    105005, г. Москва,
                    2-ая Бауманская, д. 5, стр. 1
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
                        url="https://vk.com"
                    />
                    <LinkField
                        title="Телеграм"
                        url="https://telegram.org"
                    />
                </div>
            </div>
        </div>
    );

};

export default memo(ContactCard);
