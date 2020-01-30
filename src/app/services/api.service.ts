import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PHOTOS_API_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = PHOTOS_API_URL;

  constructor(private httpClient: HttpClient) { }

  public fetchPhotos = () => {
  }
}
