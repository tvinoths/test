// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';

// @NgModule({
//   imports:      [ BrowserModule, FormsModule ],
//   declarations: [ AppComponent, HelloComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';


import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridTypeComponent } from './grid.type';
import { GridFormlyCellComponent } from './grid-formly-cell.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions:{
            templateOptions:{
              width: '100%',
              height:'400px'
            },
          },
        },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),

    FormlyMatToggleModule,    
     MatNativeDateModule,
    FormlyMatDatepickerModule,
    AgGridModule.withComponents([GridFormlyCellComponent]),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GridTypeComponent,
    GridFormlyCellComponent,
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */