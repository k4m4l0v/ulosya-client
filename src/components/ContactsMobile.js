import React, { useContext } from "react";
import '../styles/contactsMobile.css';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import vk from "../images/VK-Logo.png";
import max from "../images/MAX-32x32.png";

const ContactsMobile = observer(() => {
    const {callback} = useContext(Context);

    const setIsCallback = (e) => {
        callback.setIsCallback(true);
    }

    return (
        <section className="contacts_mobile" id="contacts_mobile">
            <h2 className="contacts_mobile__title">
                Контакты
            </h2>
            <div className="contacts_mobile__wrapper">
                <div className="contacts_mobile__call_container">
                    <article className="contacts_mobile__call">
                        <div className="contacts_mobile__call_title">
                            Звоните
                        </div>
                        <div className="contacts_mobile__call_phone_number">
                            <a href="tel:+79951584032">+7(995)158-40-32</a>
                        </div>
                    </article>
                    <article className="contacts_mobile__write">
                        <div className="contacts_mobile__write_title">
                            Пишите
                        </div>
                        <div className="contacts_mobile__write_phone_number">
                            <a href="mailto: ulosya-pitomnik@mail.ru">ulosya-pitomnik@mail.ru</a>
                        </div>
                    </article>
                    <div className="contacts_mobile__images_container">
                        <img src={max} className="contacts_mobile__image" />
                        <img src={vk} className="contacts_mobile__image" />
                    </div>
                    <a>
                        <button className="contacts_mobile__button" id="callback_button" onClick={setIsCallback}>
                            Заказать обратный звонок
                        </button>
                    </a>
                </div>
                <div className="contacts_mobile__map_container">
                    <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3A855a805ad61e2338fdf28bdbeac9c1f47b6a85b4ff5d981dc0b161017ffb27b6" frameBorder="0" allowFullScreen={true} width="100%" height="100%" style={{display: "block"}}></iframe>
                </div>                
            </div>
        </section>
    )
});

export default ContactsMobile;
