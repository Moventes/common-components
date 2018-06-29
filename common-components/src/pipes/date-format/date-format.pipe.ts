import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';

const moment = moment_;

/**
 * mvPhoneFormat pipe.
 * @argument phoneToFormat phone number to format
 * @argument countryCode country code in 2 caracters (eg. 'FR')
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mvDateFormat',
})
export class DateFormatPipe implements PipeTransform {


  transform(dateToFormat: Date, countryCode: string, format?: string): string {

    moment.locale(countryCode);
    if (!format) {
      format = 'LLLL';
    }
    if (!countryCode) {
      countryCode = 'fr';
    }
    return moment(dateToFormat).format(format);
  }

}
