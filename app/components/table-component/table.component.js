import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortPipe } from '../../pipes/sort.pipe';

import { TableStoreService } from '../../services/table-store.service';
import template from './table.template.html';
import { AddItemComponent } from '../add-item/add-item.component';
import { TableItemComponent } from '../table-item/table-item.component';

@Component({
  selector: 'table-component',
  template: template,
  directives: [AddItemComponent, TableItemComponent],
  pipes: [SortPipe]
})
export class TableComponent {
  constructor(tableStore: TableStoreService, route: ActivatedRoute) {
    this._tableStore = tableStore;
    this._route = route;
    this._currentStatus = '';
  }

  sorting = {
    value: 'name',
    isAscending: true
  }
  sortBy = {
    name: 'name',
    surname: 'surname',
    age: 'age',
    gender: 'gender'
  }

  ngOnInit() {
    this._route.params
      .map(params => params.status)
      .subscribe((status) => {
        this._currentStatus = status;
      });
  }

  remove(uid) {
    this._tableStore.remove(uid);
  }

  update() {
    this._tableStore.persist();
  }

  getTableItems() {
    return this._tableStore.tableItems;
  }

  // TODO: Sorting isn't working!
  sortTable(sortBy) {
    this.sorting.value = sortBy;
    this.sorting.isAscending = !this.sorting.isAscending;
    console.log('sorting data: ', this.sorting);
  }

}
