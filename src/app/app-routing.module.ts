import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { TableComponent } from 'src/pages/table/table.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'task', pathMatch: 'full',
  },
  {
    path: 'task', component: HomeComponent,
  },
  {
    path: 'table', component: TableComponent,
  }
];

@NgModule({
  imports: [
    RouterModule, 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
