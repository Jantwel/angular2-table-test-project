import * as uuid from 'node-uuid';

export class TableItemModel {
  uid;
  name;
  surname;
  age;
  gender;

  setName(name) {
    this.name = name;
  }
  setSurname(surname) {
    this.surname = surname;
  }
  setAge(age) {
    this.age = age;
  }
  setGender(gender) {
    this.gender = gender;
  }

  constructor(item) {
    this.uid = uuid.v4();
    this.completed = false;
    this.name = item.name;
    this.surname = item.surname;
    this.age = item.age;
    this.gender = item.gender;
  }
}
