import { Component, OnInit } from '@angular/core';
import { Photo } from '../../services/photo.service';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
})
export class MetricsComponent implements OnInit {

  photos: Photo[];
  constructor(private metricsService: MetricsService) { }

  ngOnInit() {
    this.photos = this.metricsService.getPhotosHandler()
  }

}
