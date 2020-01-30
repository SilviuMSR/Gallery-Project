import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputText: String = '';
  photos: Array<{}>;
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  fetchPhotos = () => {
    this.photoService.fetchPhotosByQuery(this.inputText).subscribe((result: any) => {
      let mappedResult = result.results.map(item => ({ id: item.id, urls: item.urls, likes: item.likes, tags: item.tags, description: item.description }))
      this.photos = mappedResult
    })
  }

}
