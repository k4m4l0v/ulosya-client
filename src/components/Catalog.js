import React, { useContext, useEffect, useMemo, useState } from 'react';
import '../styles/catalog.css';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { getItems } from '../http/userAPI';

const Catalog = observer(() => {
    const {item, basket} = useContext(Context);

    useEffect(() => {
        getItems().then(data => item.setItems(data))
    }, []);

    const [searchQuery, setSearchQuery] = useState('');

    const items = [];

    item.items.map(item =>
        items.push(item)
    )

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const visibleItems = filteredItems.slice(0, item.visibleCount);

    const showMore = () => {
        item.setVisibleCount(10);
    }

    return (
        <section className="catalog" id="catalog">
            <div className="catalog__title_wrapper">
                <h2 className="catalog__title">
                    Каталог
                </h2>
            </div>
            <div className="catalog__search_wrapper">
                <input className="catalog__search" placeholder="Поиск" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <ul className="catalog__list">
                {visibleItems.map(item =>
                    <li className="catalog__list_item" style={{backgroundImage: `url(http://95.163.227.128:5000/${item.img})`}}
                    onClick={() => {
                        if (basket.basket.length === 0) {
                            basket.setBasket(item)
                            basket.setBasketCount(item.id, 1)
                        } else if (basket.basket.find(itemExist => itemExist.id === item.id)) {
                                basket.basketCount.find(count => count.id === item.id).count += 1
                        } else {
                            basket.setBasket(item)
                            basket.setBasketCount(item.id, 1)
                        }
                    }}
                    key={item.id}>
                        <div className="catalog__list_item_description">
                            <p>{item.name}</p>
                            <p>{item.price} руб.</p>
                        </div>
                    </li>
                )}
            </ul>
            <div className="catalog__button_container">
                <button className="catalog__button" onClick={showMore}>
                    Показать ещё
                </button>
            </div>
        </section>
    )
});

export default Catalog;
