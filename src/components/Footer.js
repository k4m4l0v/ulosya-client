import React from "react";
import '../styles/footer.css';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="contacts__title">
                Контакты
            </h2>
            <div className="contacts__call_container">
                <article className="contacts__call">
                    <div className="contacts__call_title">
                        Звоните и пишите
                    </div>
                    <div className="contacts__call_phone_number">
                        <a href="tel:+79951584032">+7(995)158-40-32</a>
                    </div>
                </article>
            </div>
            <div className="footer__address_container">
                <div className="footer__address_wrapper">
                    <div className="footer__address_title">
                        Адрес:
                    </div>
                    <div className="footer__address_description">
                        Московская область, Сергиево-Посадский городской округ, М-8 Холмогоры, 61-й 
                        километр, вл2
                    </div>
                </div>
                <img className="footer__logo" src={logo} alt="Логотип" />
            </div>
        </footer>
    )
}

export default Footer;
