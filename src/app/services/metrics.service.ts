import { Injectable } from '@angular/core';
import { Photo } from './photo.service'

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  photos: Photo[];

  constructor() { }

  setPhotosHandler(photos: Photo[]) {
    this.photos = photos
  }

  getPhotosHandler(): Photo[] {
    return this.photos
  }
}
