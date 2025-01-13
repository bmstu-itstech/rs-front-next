import "./style.css";
import { memo } from "preact/compat";
import { Container } from "../../shared";
import { LeaderCard } from "../../features";
import ContactCard from "../../features/ContactCard";
import { isMobile } from "../../hooks";
import ContactsCarousel from "../../features/ContactsCarousel";

const ContactsScreen: React.FC<{}> = () => {

    const mobile = isMobile();

    return (
        <Container id="contacts">
            <div class="contacts">
                <div class="subtitle">Контакты</div>
                {mobile && <ContactsCarousel />}
                {!mobile && <div class="cards">
                    <LeaderCard />
                    <ContactCard />
                </div>}
            </div>
        </Container>
    )

};

ContactsScreen.displayName = "ContactsScreen";

export default memo(ContactsScreen);
