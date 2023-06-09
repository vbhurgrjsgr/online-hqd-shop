import { makeAutoObservable } from 'mobx';

export default class deviceStore {
  constructor() {
    this._types = [];
    this._devices = [];
    this._basket = [];
    this._selectedType = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 6;

    makeAutoObservable(this);
  }

  setBasket(basket) {
    this._basket = basket;
  }

  setTypes(types) {
    this._types = types;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }

  get selectedType() {
    return this._selectedType;
  }
  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }

  get devices() {
    return this._devices;
  }

  get basket() {
    return this._basket;
  }
}
