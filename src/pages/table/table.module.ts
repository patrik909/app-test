import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TableComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class TableModule { }

