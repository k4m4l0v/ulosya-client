import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import "../styles/callback.css";

const Callback = observer(() => {
    const {callback} = useContext(Context);

    const setCallbackStatus = (e) => {
        callback.setIsCallback(false);
    }

    const isFormValid = callback.userInfo.name !== '' && callback.userInfo.phone !== ''

    async function sendMessage(nameProp, phoneProp) {
        const response = await fetch('http://ulosya-pitomnik.ru/api/message/callback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameProp,
                phone: phoneProp
            })
        })

        const result = await response.json();
    }

    return (
        <section className={callback.isCallback ? "callback" : "hidden"} id="callback">
            <div id="callback__close_button">
                <svg className="callback__close_button pointer" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setCallbackStatus}>
                    <path d="M2.5 2.5L62.5 62.5M62.5 2.5L2.5 62.5" strokeWidth="5" strokeLinecap="round"/>
                </svg>
            </div>
            <h2 className="callback__title">
                Введите Ваше имя
            </h2>
            <input className="callback__input" type="text" onChange={(e) => callback.setUserName(e.target.value)} />
            <h2 className="callback__title">
                Введите Ваш номер телефона
            </h2>
            <input className="callback__input" type="text" onChange={(e) => callback.setUserPhone(e.target.value)} />
            <div className="callback__button_wrapper">
                <button className={isFormValid ? "" : "callback__button-disabled"} disabled={!isFormValid} onClick={() => {
                    setCallbackStatus();
                    sendMessage(callback.userInfo.name, callback.userInfo.phone);
                }}>
                    Заказать обратный звонок
                </button>
            </div>
        </section>
    )
});

export default Callback;
