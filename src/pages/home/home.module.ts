import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCardModule } from 'src/components/home-card/home-card.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
  
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    HomeCardModule,
  ],
  declarations: [
    HomeComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})
export class HomeModule { }

