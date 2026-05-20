import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import logo from '../images/logo.png';
import { Context } from "../index";
import '../styles/header.css';

const Header = observer(() => {
    const {burger, basket} = useContext(Context);

    const setBasketStatus = (e) => {
        e.preventDefault();
        basket.setIsBasket(true);
    }

    const setBurgerStatus = (e) => {
        e.preventDefault();
        burger.setBurgerStatus(true);
    }

    let isBasket = "hidden";

    return (
        <header className="header" id="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            <ul className="header__navigation">
                <li className="header__navigation_item">
                    <a href="#hero" className="header__navigation_item">Главная</a>
                </li>
                <li className="header__navigation_item">
                    <a href="#about_us" className="header__navigation_item">О нас</a>
                </li>
                <li className="header__navigation_item">
                    <a href="#catalog" className="header__navigation_item">Каталог</a>
                </li>
                <li className="header__navigation_item">
                    <a href="#contacts" className="header__navigation_item">Контакты</a>
                </li>
            </ul>
            <div id="basket_button">
                <svg width="60" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="header__basket pointer" onClick={setBasketStatus}>
                    <path d="M8.66507 42.1594C8.0734 39.7928 9.8635 37.5 12.3031 37.5H77.6972C80.137 37.5 81.9272 39.7928 81.3355 42.1594L74.5453 69.3191C73.7106 72.6577 70.711 75 67.2692 75H22.731C19.2895 75 16.2896 72.6577 15.455 69.3191L8.66507 42.1594Z" strokeWidth="3" strokeLinejoin="round"/>
                    <path d="M33.75 52.5V60" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M56.25 52.5V60" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M22.5 37.5L37.5 15" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M67.5 37.5L52.5 15" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>
            <div className="header__burger_container" id="burger_button">
                <svg className="header__burger" width="58" height="36" viewBox="0 0 58 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setBurgerStatus}>
                    <path d="M2 2H56" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M2 18H56" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M2 34H56" strokeWidth="4" strokeLinecap="round"/>
                </svg>
            </div>
        </header>
    )
})

export default Header;
