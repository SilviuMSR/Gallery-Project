import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

export interface Photo {
  id: string;
  urls: Object;
  likes: number;
  tags: Object[];
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export abstract class PhotoService {
  abstract fetchPhotosByQuery(queryTerm): Observable<Photo[]>;
}
