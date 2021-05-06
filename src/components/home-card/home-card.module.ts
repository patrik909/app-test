import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import HomeCardComponent from './home-card.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    HomeCardComponent,
  ],
  declarations: [
    HomeCardComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class HomeCardModule { }
