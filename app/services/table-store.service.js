import localStorage from 'localStorage';

import { TableItemModel } from '../models/table-item.model';

export class TableStoreService {
  tableItems = [];

  constructor() {
    let persistedTableItems = JSON.parse(localStorage.getItem('angular2-table')) || [];

    this.tableItems = persistedTableItems.map( (item) => {
      let ret = new TableItemModel(item);
      ret.completed = item.completed;
      ret.uid = item.uid;
      ret.name = item.name;
      ret.surname = item.surname;
      ret.age = item.age;
      ret.gender = item.gender;
      return ret;
    });
  }

  get(state) {
    return this.tableItems.filter((item) => item.completed === state.completed);
  }

  remove(uid) {
    let item = this._findByUid(uid);

    if (item) {
      this.tableItems.splice(this.tableItems.indexOf(item), 1);
      this.persist();
    }
  }

  add(item) {
    this.tableItems.push(new TableItemModel(item));
    this.persist();
  }

  persist() {
    this._clearCache();
    localStorage.setItem('angular2-table', JSON.stringify(this.tableItems));
  }

  _findByUid(uid) {
    return this.tableItems.find((item) => item.uid == uid);
  }

  _clearCache() {
    this.completedTableItems = null;
    this.remainingTableItems = null;
  }
}
