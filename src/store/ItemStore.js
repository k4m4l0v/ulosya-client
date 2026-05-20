import { makeAutoObservable } from "mobx";

export default class ItemStore {
    constructor() {
        this._items = [];
        this._visibleCount = 10;
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setItems(items) {
        this._items = items;
    }

    setLimit(number) {
        this._limit = number
    }

    setVisibleCount(number) {
        this._visibleCount += number;
    }

    setSearchQuery(prop) {
        this._searchQuery = prop;
    }

    get types() {
        return this._types;
    }

    get items() {
        return this._items;
    }

    get limit() {
        return this._limit;
    }

    get visibleCount() {
        return this._visibleCount;
    }
}
