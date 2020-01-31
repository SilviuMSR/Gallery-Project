import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  photos: any;
  constructor() { }

  setPhotosHandler = photos => this.photos = photos
  
  getPhotosHandler = () => this.photos
}
