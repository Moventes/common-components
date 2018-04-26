import { Pipe, PipeTransform } from '@angular/core';
import * as libPhoneNumber from 'google-libphonenumber';
const PhoneNumberUtil = libPhoneNumber.PhoneNumberUtil;
const PhoneNumberFormat = libPhoneNumber.PhoneNumberFormat;
// const PhoneNumberType = libPhoneNumber.PhoneNumberType;
const phoneUtil = PhoneNumberUtil.getInstance();

/**
 * mvPhoneFormat pipe.
 * @argument phoneToFormat phone number to format
 * @argument countryCode country code in 2 caracters (eg. 'FR')
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mvPhoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {


  transform(phoneToFormat: string, countryCode: string): string {

    try {
      const gNumber = phoneUtil.parse(phoneToFormat.replace(/\s/, ''), countryCode);
      return phoneUtil.format(gNumber, PhoneNumberFormat.NATIONAL);
    } catch (err) {
      return phoneToFormat;
    }

  }

}
