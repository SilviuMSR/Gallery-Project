import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { MetricsService } from '../../services/metrics.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputText: String = '';
  photos: Array<{}>;
  currentPhoto: any;
  splitScreen: boolean = false;
  status: boolean = false;
  constructor(private photoService: PhotoService, private metricsService: MetricsService) { }

  ngOnInit() {
  }

  fetchPhotosHandler = () => {
    this.photoService.fetchPhotosByQuery(this.inputText).subscribe((result: any) => {
      let mappedResult = result.results.map(item => ({ id: item.id, urls: item.urls, likes: item.likes, tags: item.tags, description: item.description }))
      this.photos = mappedResult
      this.metricsService.setPhotosHandler(result.results)
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
