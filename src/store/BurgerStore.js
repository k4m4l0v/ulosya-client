import { makeAutoObservable } from "mobx";

export default class BurgerStore {
    constructor() {
        this._burgerStatus = false;
        makeAutoObservable(this);
    }

    setBurgerStatus(bool) {
        this._burgerStatus = bool;
    }

    get burgerStatus() {
        return this._burgerStatus;
    }
}
