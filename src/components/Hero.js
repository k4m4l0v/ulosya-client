import React from 'react';
import '../styles/hero.css';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <h1 className="hero__title">
                У Лося - магазин и питомник уличных растений
            </h1>
            <h2 className="hero__description">
                Украсим ваш участок вместе
            </h2>
            <a href="#catalog">
                <button className="hero__button">
                    Перейти в каталог
                </button>
            </a>
        </section>
    )
}

export default Hero;
