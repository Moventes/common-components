import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { } from 'mv-common-components';

@Component({
  selector: 'app-root',
  template: `<div>hello world</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value$: Observable<string>;

  constructor(
  ) {
  }

}
