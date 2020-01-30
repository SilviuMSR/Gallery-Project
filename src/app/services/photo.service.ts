import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PHOTOS_API_URL, API_ACCESS_KEY } from '../utils/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private API_URL = PHOTOS_API_URL;

  constructor(private httpClient: HttpClient) { }

  public fetchPhotosByQuery = queryTerm => {
    return this.httpClient.get(`${this.API_URL}/search/photos?client_id=${API_ACCESS_KEY}&query=${queryTerm}`)
  }
}
