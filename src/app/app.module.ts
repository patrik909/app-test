import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationModule } from 'src/components/navigation/navigation.module'
import { HomeComponent } from 'src/pages/home/home.component';
import { TableComponent } from 'src/pages/table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { tableReducer } from '../store/table/table.reducer';
import { HomeCardModule } from 'src/components/home-card/home-card.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavigationModule,
    HomeCardModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('table', tableReducer),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
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
