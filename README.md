# This Angular project hosts the common UI library for angular-components and ionic-components.




It features the `mv-common-components` library package: `mv-common-components` is packaged with [ng-packagr](https://github.com/dherges/ng-packagr) and then imported into an Angular CLI app.
To run the example, do the following steps:

```bash
$ yarn install
$ yarn build:lib
$ ng serve
```

## To add the library to a project


```bash
npm install mv-common-components --save
```

or 

```bash
npm link mv-common-components
```
## To build the library and link it locally

```bash
npm run link
```

This will create a `dist` directory which will be linked with npm

## To build the library and publish it on NPM

```bash
npm run publish
```

WARNING: Don't forget to update the version (in package.json) before publishing it



## Build documentation

```bash
npm run compodoc
```

## Serve documentation

```bash
npm run compodoc-serve
```

documentation will be served on http://localhost:8080




#### Build

Now, build your library:

```bash
$ yarn build:lib
```


#### Show off in Demo App

First, in `.angular-cli.json` set `outDir` of the Angular CLI app, so that it does not conflict with output directory of your library!

```json
{
  "project": {
    "name": "ng-packaged"
  },
  "apps": [
    {
      "root": "src",
      "outDir": "dist/app",
      /* ... */
    }
  ]
}
```


Then, in `tsconfig.app.json`, map the TypeScript import path:

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "paths": {
      "mv-common-components": [ "../dist/common-components" ]
    }
  }
}
```

Finally, include in your application.
In `app.module.ts`:

```ts
import { ComponentsCommonModule } from 'mv-common-components';

@NgModule({
  imports: [
    /* .. */
    ComponentsCommonModule.forRoot()
  ],
})
export class AppModule { }
```

And use them in components like `app.component.ts`:

```ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BarService } from 'mv-common-components';

@Component({
  selector: 'app-root',
  template: `
<my-foo></my-foo>
<hr>
<marquee>{{ value$ | async }}</marquee>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value$: Observable<string>;

  constructor (
    bar: BarService
  ) {
     this.value$ = bar.value;
  }

}
```
