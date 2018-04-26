import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

/**
 * SortPipe pipe.
 * @argument args.property name of the property used to sort the array
 * @argument args.order order of the list (asc or desc)
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mvSort',
})
export class SortPipe implements PipeTransform {


  transform(array: Array<any>, args: any): Array<string> {

    if (typeof array === 'undefined' || array === null || !(array.length > 1)) {
      return array;
    }
    let order = 1;
    if (typeof args.order === 'string') {
      if (args.order === 'desc' || args.order === '-' || args.order === '>') {
        order = -1;
      }
    } else if (typeof args.order === 'number') {
      order = args.order;
    }

    if (typeof args.property !== 'string') {
      throw new Error('property param of the pipe "order" should be a string');
    }
    const property = args.property.trim();

    return array.sort(function (a: any, b: any): number {

      if (a === b || a[property] === b[property]) {
        return 0;
      } else if (typeof (a[property]) === 'undefined' || a[property] === null) {
        return -1 * order;
      } else if (typeof (b[property]) === 'undefined' || b[property] === null) {
        return 1 * order;
      } else if ((a[property] instanceof Date || a[property] instanceof moment) && (b[property] instanceof Date || b[property] instanceof moment)) {
        const aMoment = moment(a[property]);
        const bMoment = moment(b[property]);

        return aMoment.diff(bMoment) * order;
      } else if (typeof a[property] === 'number' && typeof b[property] === 'number') {
        return (a[property] - b[property]) * order;
      } else if (typeof a[property] === 'string' && typeof b[property] === 'string') {
        return a[property].localeCompare(b[property]) * order;
      } else {
        throw new Error('type of ' + property + ' is not handled by "sort" pipe');
      }
    });
  }

}
