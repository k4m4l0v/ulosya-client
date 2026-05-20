import { makeAutoObservable } from "mobx";

export default class CallbackStore {
    constructor() {
        this._isCallback = false;
        this._userInfo = {name: '', phone: ''};
        makeAutoObservable(this);
    }

    setIsCallback(bool) {
        this._isCallback = bool;
    }

    setUserName(name) {
        this._userInfo.name = name;
    }

    setUserPhone(phone) {
        this._userInfo.phone = phone;
    }

    get isCallback() {
        return this._isCallback;
    }

    get userInfo() {
        return this._userInfo;
    }
}
