import { Component, OnInit } from '@angular/core';
import { PhotoService, Photo } from '../../services/photo.service';
import { PhotoPublicService } from '../../services/photo-public.service'
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    { provide: PhotoService, useClass: PhotoPublicService }
  ]
})
export class SearchComponent implements OnInit {

  inputText: String = '';
  photos: Array<Photo>;
  currentPhoto: Photo;
  splitScreen: boolean = false;
  status: boolean = false;
  constructor(private photoService: PhotoService, private metricsService: MetricsService) { }

  ngOnInit() {
  }

  fetchPhotosHandler = () => {
    this.photoService.fetchPhotosByQuery(this.inputText).subscribe((photos: Photo[]) => {
      this.photos = photos
      this.metricsService.setPhotosHandler(this.photos)
      this.inputText = ''
    })
  }

  // On click photo event
  photoClickedHandler = photo => {
    this.currentPhoto = photo
    this.splitScreen = true
  }

  // Function called on event emitted by photo-details component when close details part
  closeDetailsHandler = event => {
    this.splitScreen = event.value
  }

}
