import React from "react";
import '../styles/footerMobile.css';
import logo from '../images/logo.png';

const FooterMobile = () => {
    return (
        <footer className="footer_mobile">
            <h2 className="contacts_mobile__title">
                Контакты
            </h2>
            <div className="footer_mobile__wrapper">
                <div className="footer_mobile__contacts_wrapper">
                    <article className="contacts_mobile__call">
                        <div className="contacts_mobile__call_title">
                            Звоните
                        </div>
                        <div className="contacts_mobile__call_phone_number">
                            <a href="tel: +79951584032">+7(995)158-40-32</a>
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
                    <div className="footer_mobile__address_wrapper">
                        <div className="footer_mobile__address_title">
                            Адрес:
                        </div>
                        <div className="footer_mobile__address_description">
                            Московская область, Сергиево-Посадский городской округ, М-8 Холмогоры, 61-й 
                            километр, вл2
                        </div>
                    </div>
                </div>
                <div className="footer_mobile__button_wrapper">
                    <img className="footer_mobile__logo" src={logo} alt="Логотип" />
                </div>
            </div>
        </footer>
    )
}

export default FooterMobile;
