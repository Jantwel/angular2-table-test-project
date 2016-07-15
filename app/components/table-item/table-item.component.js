import { Component, EventEmitter, Output, Input } from '@angular/core';

import template from './table-item.template.html';

@Component({
  selector: 'table-item',
  template: template
})
export class TableItemComponent {
  @Input() tableItem;

  @Output() itemModified = new EventEmitter();

  @Output() itemRemoved = new EventEmitter();

  isEditing = false;
  editedItem = {name: '', surname: '', age: '', gender: ''}


  edit() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  saveChanges() {
    if (this.editedItem.name !== '') {
      this.tableItem.setName(this.editedItem.name)
    } 
    if (this.editedItem.surname !== '') {
      this.tableItem.setSurname(this.editedItem.surname)
    }
    if (this.editedItem.age !== '') {
      this.tableItem.setAge(this.editedItem.age)
    }
    if (this.editedItem.gender != '') {
      this.tableItem.setGender(this.editedItem.gender)
    }

    this.isEditing = false;
    this.update();
  }

  remove() {
    this.itemRemoved.next(this.tableItem.uid);
  }

  update() {
    this.itemModified.next(this.tableItem.uid);
  }

}
