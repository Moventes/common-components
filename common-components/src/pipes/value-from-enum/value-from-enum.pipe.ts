import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * mvValueFromEnum pipe
 * It takes a string and an enum as inputs and returns the translation of the value from enum.
 */
@Pipe({
  name: 'mvValueFromEnum'
})
export class ValueFromEnumPipe extends TranslatePipe implements PipeTransform {
  /**
   * Method returning the translated value.
   * @param object the object to transform
   *
   * @returns list The array build from the object
   */
  transform(key: string, enumeration: any): string {
    const value = enumeration[key];
    return super.transform(value);
  }
}
