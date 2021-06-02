import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationModule } from 'src/components/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { tableReducer } from '../store/table/table.reducer';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavigationModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('table', tableReducer),
  ],
  declarations: [
    AppComponent,
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
