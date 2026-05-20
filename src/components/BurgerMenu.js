import React, { useContext } from 'react';
import '../styles/burgerMenu.css';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const BurgerMenu = observer(() => {
    const {burger, basket} = useContext(Context);

    const setBurgerStatus = (e) => {
        e.preventDefault();
        burger.setBurgerStatus(false);
    }

    const setBasketStatus = (e) => {
        e.preventDefault();
        basket.setIsBasket(true);
    }
    
    const handleClick = (e) => {
        setBurgerStatus(e);
        setBasketStatus(e);
    }

    return (
        <section className={burger.burgerStatus ? "burger__menu" : "hidden"} id="burger">
            <div id="burger__close_button">
                <svg className="burger__close_button" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setBurgerStatus}>
                    <path d="M2.5 2.5L62.5 62.5M62.5 2.5L2.5 62.5" strokeWidth="5" strokeLinecap="round"/>
                </svg>
            </div>
            <ul className="burger__navigation">
                <li className="burger__navigation_item">
                    <a href="#hero" className="burger__navigation_item">Главная</a>
                </li>
                <li className="burger__navigation_item">
                    <a href="#about_us" className="burger__navigation_item">О нас</a>
                </li>
                <li className="burger__navigation_item">
                    <a href="#catalog" className="burger__navigation_item">Каталог</a>
                </li>
                <li className="burger__navigation_item">
                    <a href="#contacts_mobile" className="burger__navigation_item">Контакты</a>
                </li>
                <li className="burger__navigation_item"  id="burger__basket_button" onClick={handleClick}>
                    <a className="burger__navigation_item">Корзина</a>
                </li>
            </ul>
        </section>
    )
})

export default BurgerMenu;
