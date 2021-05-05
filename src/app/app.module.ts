import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationModule } from 'src/components/navigation/navigation.module'
import { HomeComponent } from 'src/pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class AppModule { }
