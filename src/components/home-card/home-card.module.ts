import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import HomeCardComponent from './home-card.component';

@NgModule({
  imports: [
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
