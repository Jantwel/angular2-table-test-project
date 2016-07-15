import { Component } from '@angular/core';

import { TableStoreService } from '../../services/table-store.service';
import template from './add-item.template.html';

@Component({
  selector: 'add-item-component',
  template: template
})
export class AddItemComponent {

  newTableItem = {
    name: '',
    surname: '',
    age: '',
    gender: ''
  };

  constructor(tableStore: TableStoreService) {
    this._tableStore = tableStore;
  }

  addItem() {
    this._tableStore.add(this.newTableItem);
    this.newTableItem = {
      name: '',
      surname: '',
      age: '',
      gender: ''
    };
  }
}
