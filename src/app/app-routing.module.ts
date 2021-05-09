import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { TableComponent } from 'src/pages/table/table.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'table', component: TableComponent,
  }
];

@NgModule({
  imports: [
    RouterModule, 
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
