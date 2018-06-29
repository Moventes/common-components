import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CircularJsonPipe } from './pipes/circular-json/circular-json.pipe';
import { DateFormatPipe } from './pipes/date-format/date-format.pipe';
import { IteratorPipe } from './pipes/iterator/iterator.pipe';
import { PhoneFormatPipe } from './pipes/phone-format/phone-format.pipe';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { ValueFromEnumPipe } from './pipes/value-from-enum/value-from-enum.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IteratorPipe,
    ValueFromEnumPipe,
    PhoneFormatPipe,
    DateFormatPipe,
    CircularJsonPipe,
    SortPipe,
    SafeHtmlPipe
  ],
  exports: [
    IteratorPipe,
    ValueFromEnumPipe,
    PhoneFormatPipe,
    DateFormatPipe,
    CircularJsonPipe,
    SortPipe,
    SafeHtmlPipe
  ]
})
export class ComponentsCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsCommonModule,
      providers: [
        // services of componentes
      ]
    };
  }
}
