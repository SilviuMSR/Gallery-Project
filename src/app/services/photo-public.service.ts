import { Injectable } from '@angular/core';
import { Photo, PhotoService } from './photo.service'
import { HttpClient } from '@angular/common/http';
import { PHOTOS_API_URL } from '../utils/constants';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoPublicService implements PhotoService {
  private API_URL = PHOTOS_API_URL;

  constructor(private httpClient: HttpClient) { }

  fetchPhotosByQuery(queryTerm): Observable<Photo[]> {
    const photosObservable = new Observable<Photo[]>(observer => {
      this.httpClient.get(`${this.API_URL}/search/photos?client_id=${environment.API_ACCESS_KEY}&query=${queryTerm}`).subscribe((result: any) => {
        let mappedResult = result.results.map(item => ({ id: item.id, urls: item.urls, likes: item.likes, tags: item.tags, description: item.description }))
        observer.next(mappedResult)
      })
    })
    return photosObservable
  }
}
