import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { BarChartComponent } from './components/metrics/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/metrics/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './components/metrics/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MetricsComponent,
    NavbarComponent,
    PhotoComponent,
    PhotoDetailsComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
