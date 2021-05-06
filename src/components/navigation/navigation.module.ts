import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import NavigationComponent from 'src/components/navigation/navigation.component';

import { AppRoutingModule } from '../../app/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  exports: [
    NavigationComponent,
  ],
  declarations: [
    NavigationComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class NavigationModule { }
