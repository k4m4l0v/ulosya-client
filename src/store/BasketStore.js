import { makeAutoObservable } from 'mobx';

export default class BasketStore {
    constructor() {
        this._isBasket = false;
        this._basket = [];
        this._basketCount = [{id: 0, count: 0}];
        this._userInfo = {name: '', phone: '', address: ''};
        makeAutoObservable(this);
    }

    setIsBasket(bool) {
        this._isBasket = bool;
    }

    setBasket(item) {
        this._basket.push(item);
    }

    clearBasket() {
        this._basket = [];
    }

    setBasketCount(id, count) {
        this._basketCount.push({id, count})
    }

    setUserName(name) {
        this._userInfo.name = name;
    }

    setUserPhone(phone) {
        this._userInfo.phone = phone;
    }

    setUserAddress(address) {
        this._userInfo.address = address;
    }

    get isBasket() {
        return this._isBasket;
    }

    get basket() {
        return this._basket;
    }

    get basketCount() {
        return this._basketCount;
    }

    get userInfo() {
        return this._userInfo;
    }
}
