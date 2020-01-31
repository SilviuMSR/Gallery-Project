import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  photos: any;

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = ([]);
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{ data: [], label: '' }];

  constructor() { }

  ngOnInit() {
    if (this.photos) {
      this.barChartLabels = (this.photos.map(item => item.description).filter(item => item))
      this.barChartData = [{ data: this.photos.filter(item => item.description).map(item => item.likes), label: 'Likes' }]
    }
  }

}
