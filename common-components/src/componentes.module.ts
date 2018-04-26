import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IteratorPipe } from './pipes/iterator/iterator.pipe';
import { ValueFromEnumPipe } from './pipes/value-from-enum/value-from-enum.pipe';
import { CircularJsonPipe } from './pipes/circular-json/circular-json.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';
import { PhoneFormatPipe } from './pipes/phone-format/phone-format.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IteratorPipe,
    ValueFromEnumPipe,
    PhoneFormatPipe,
    CircularJsonPipe,
    SortPipe,
    SafeHtmlPipe
  ],
  exports: [
    IteratorPipe,
    ValueFromEnumPipe,
    PhoneFormatPipe,
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
