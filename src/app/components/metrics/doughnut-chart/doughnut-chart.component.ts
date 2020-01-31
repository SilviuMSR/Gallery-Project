import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  @Input()
  photos: any;

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [
    []
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
    if (this.photos) {
      this.doughnutChartLabels = this.photos.map(item => item.description).filter(item => item)
      this.doughnutChartData = [this.photos.filter(item => item.description).map(item => item.likes)]
    }
  }

}
