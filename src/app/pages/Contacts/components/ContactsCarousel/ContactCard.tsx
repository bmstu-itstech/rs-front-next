import styles from "./ContactCard.module.css";
import Field from "./Field";
import LinkField from "./LinkField";

function ContactCard() {

    return (
        <div className={styles.contactOuter}>
            <div className={styles.contactInner}>
                <div className={styles.contactBlock}>
                    <Field
                        title="Телефон"
                        value="+7 (800) 555-35-35"
                    />
                    <Field
                        title="Email"
                        value="cmr@bmstu.ru"
                    />
                </div>
                <div className={styles.contactBlock}>
                    <LinkField
                        title="Политика перс. данных"
                        url="https://google.com"
                    />
                </div>
                <div className={styles.contactBlock}>
                    <LinkField
                        title="Сайт университета"
                        url="https://google.com"
                    />
                </div>
                <div className={styles.contactBlock}>
                    <Field
                        title="Адрес"
                        value={<LinkField
                            title="Схема проезда"
                            url="https://google.com"      
                        />}
                    />
                </div>
                <div className={styles.contactBlock}>
                    105005, г. Москва,
                    2-ая Бауманская, д. 5, стр. 1
                </div>
                <div className={styles.contactBlock}>
                    <Field
                        title="Соцсети"
                        value={null}
                    />
                </div>
                <div className={styles.contactList}>
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

export default ContactCard;
