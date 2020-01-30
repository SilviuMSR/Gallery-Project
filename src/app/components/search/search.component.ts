import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputText: String = '';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  fetchPhotos = () => {
    this.apiService.fetchPhotos()
  }

}
