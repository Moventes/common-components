import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { AsyncPipe } from '@angular/common';

/**
 * This pipe extends the AsyncPipe.
 * It takes an object, an enum or an observable as an input and returns an array.
 * The array is a list of the different objects in case of an observable.
 * The array is a list of objects {key: key, value: value} in case of an object or an enum.
 */
@Pipe({
  name: 'mvIterator'
})
export class IteratorPipe extends AsyncPipe implements PipeTransform {
  /**
   * Method returning the array from in object
   * @param object the object to transform
   *
   * @returns list The array build from the object
   */
  transform(object: any): any {
    if (object instanceof Observable) {
      return super.transform(object);
    }
    const list = [];
    // tslint:disable-next-line:forin
    for (const key in object) {
      list.push({ key: key, value: object[key] });
    }
    return list;
  }

}
