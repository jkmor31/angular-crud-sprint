import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMovies(): Observable<any> {
    return this.http.get('http://localhost:8082/api/movies');
  }
}
