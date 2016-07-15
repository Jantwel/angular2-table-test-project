import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform{
  transform(value, args) {
    let arr = value.map(item => item.age);
    if (args.value === 'age') {
      return this.sortNumbers(value, args.value, args.isAscending)
    } else {
      return this.sortStrings(value, args.value, args.isAscending)
    }
  }
  sortNumbers(arr, value, isAscending) {
    if (isAscending) {
      return arr.sort((a, b) => a[value] - b[value]);
    } else {
      return arr.sort((a, b) => b[value] - a[value]);
    }
  }
  sortStrings(arr, value, isAscending) {
    if (isAscending) {
      return arr.sort((a, b) => {
        if (a[value].toLowerCase() < b[value].toLowerCase() ) {
            return -1;
        } else if (a[value].toLowerCase() > b[value].toLowerCase() ) {
            return 1;
        } else {
            return 0;
        }
      });
    } else {
      return arr.sort((a, b) => {
        if (a[value].toLowerCase() > b[value].toLowerCase() ) {
            return -1;
        } else if (a[value].toLowerCase() < b[value].toLowerCase() ) {
            return 1;
        } else {
            return 0;
        }
      });
    }
  }
}
