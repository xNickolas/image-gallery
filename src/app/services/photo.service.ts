import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'https://api.slingacademy.com/v1/sample-data/photos';

  constructor(private http: HttpClient) {}

  getPhotos(offset: number = 0, limit: number = 10): Observable<any> {
    const url = `${this.apiUrl}?offset=${offset}&limit=${limit}`;
    return this.http.get(url);
  }
}
