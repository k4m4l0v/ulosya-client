import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import '../styles/basket.css';

const Basket = observer(() => {
    const {basket} = useContext(Context);
    let sum = 0;

    basket.basket.map(item =>
        sum += item.price * basket.basketCount.find(count => count.id === item.id).count
    )

    const setBasketStatus = () => {
        basket.setIsBasket(false);
    }

    let count = 0;

    const isFormValid = basket.userInfo.name !== '' && basket.userInfo.phone !== '' && basket.userInfo.address !== '' && basket.basket.length > 0

    async function sendMessage(orderProp, nameProp, phoneProp, addressProp, count, sumProp) {
        const response = await fetch('http://95.163.227.128:5000/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: orderProp,
                name: nameProp,
                phone: phoneProp,
                address: addressProp,
                countStore: count,
                sum: sumProp
            })
        })

        const result = await response.json();
    }

    return (
        <section className={basket.isBasket ? "basket__container" : "hidden"} id="basket">
            <div id="basket__close_button">
                <svg className="basket__close_button pointer" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={setBasketStatus}>
                    <path d="M2.5 2.5L62.5 62.5M62.5 2.5L2.5 62.5" strokeWidth="5" strokeLinecap="round"/>
                </svg>
            </div>
            <h2 className="basket__title">
                Корзина
            </h2>
            <ul className="basket__list">
                {basket.basket.map(item => 
                    basket.basketCount.find(count => count.id === item.id).count > 0
                    ?
                    <li className="basket__list_item" key={item.id}>
                        <img src={"http://95.163.227.128:5000/" + item.img} />
                        <div className="basket__list_item_info">
                            <p>{item.name}</p>
                            <p>{item.price} руб.</p>
                            <div className="basket__list_item_info_counter">
                                <button onClick={() => {
                                        if (basket.basketCount.find(count => count.id === item.id).count > 1) {
                                            basket.basketCount.find(count => count.id === item.id).count -= 1
                                        } else if (basket.basketCount.find(count => count.id === item.id). count === 1) {
                                            const index = basket.basket.findIndex(removableItem => removableItem.id === item.id);
                                            basket.basket.splice(index, 1)
                                        }
                                    }}>-</button>
                                <p>{basket.basketCount.find(count => count.id === item.id).count}</p>
                                <button onClick={() => basket.basketCount.find(count => count.id === item.id).count += 1}>+</button>
                            </div>
                        </div>
                    </li>
                    :
                    <li></li>
                )}
            </ul>
            <h2 className="basket__total_cost">
                Итого: {sum} руб.
            </h2>
            <div className="basket__client_info">
                <h3 className="basket__client_info_title">
                    Как к вам обращаться?
                </h3>
                <div className="basket__client_info_input_wrapper">
                    <input className="basket__client_info_input" type="text" placeholder="Введите ваше имя" onChange={(e) => basket.setUserName(e.target.value)} />
                </div>
                <h3 className="basket__client_info_title">
                    Как с вами связаться?
                </h3>
                <input className="basket__client_info_input" type="text" placeholder="Введите ваш номер телефона" onChange={(e) => basket.setUserPhone(e.target.value)} />
                <h3 className="basket__client_info_title">
                    Как до вас добраться?
                </h3>
                <input className="basket__client_info_input_address" type="text" placeholder="Введите ваш адрес" onChange={(e) => basket.setUserAddress(e.target.value)} />
            </div>
            <div className="basket__order_description">
                После нажатия кнопки "Заказать" мы получим иформацию о вашем заказе и перезвоним вам в ближайшее время для уточнения деталей
            </div>
            <div className="basket__button_wrapper">
                <button className={isFormValid ? "" : "basket__button-disabled"} disabled={!isFormValid} onClick={ () => {
                    setBasketStatus();
                    sendMessage(basket.basket, basket.userInfo.name, basket.userInfo.phone, basket.userInfo.address, basket.basketCount, sum)
                }}>
                    Заказать
                </button>
            </div>
        </section>
    )
});

export default Basket;
