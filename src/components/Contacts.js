import React, { useContext } from "react";
import '../styles/contacts.css';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import vk from '../images/VK-Logo.png';
import max from '../images/MAX-32x32.png';

const Contacts = observer(() => {
    const {callback} = useContext(Context);

    const setIsCallback = (e) => {
        e.preventDefault();
        callback.setIsCallback(true);
    }

    return (
        <section className="contacts" id="contacts">
            <h2 className="contacts__title">
                Контакты
            </h2>
            <div className="contacts__call_container">
                <article className="contacts__call">
                    <div className="contacts__call_title">
                        Звоните
                    </div>
                    <div className="contacts__call_phone_number">
                        <a href="tel:+79951584032">+7(995)158-40-32</a>
                    </div>
                </article>
                <article className="contacts__write">
                    <div className="contacts__write_title">
                        Пишите
                        <img src={max} className="contacts__image" />
                        <img src={vk} className="contacts__image" />
                    </div>
                    <div className="contacts__write_phone_number">
                        <a href="mailto: ulosya-pitomnik@mail.ru">ulosya-pitomnik@mail.ru</a>
                    </div>
                </article>
                <a href="#header">
                    <button className="contacts__button" id="callback_button" onClick={setIsCallback}>
                        Заказать обратный звонок
                    </button>
                </a>
            </div>
            <div className="contacts__map_container">
                <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;source=constructor-api&amp;um=constructor%3A855a805ad61e2338fdf28bdbeac9c1f47b6a85b4ff5d981dc0b161017ffb27b6" frameBorder="0" allowFullScreen={true} width="100%" height="100%" style={{display: "block"}}></iframe>
            </div>
        </section>
    )
});

export default Contacts;
