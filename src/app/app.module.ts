import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotoComponent } from './components/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MetricsComponent,
    NavbarComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
