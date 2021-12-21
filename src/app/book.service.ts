import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './books/books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8082/api/books';
   }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getBook(id: number): Observable<any> {
  return this.http.get<any>(this.url + '/' + id);
  }

  deleteBooks(id: number): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }
  createBook(bookData: Object): Observable<Book>{
    return this.http.post<Book>(this.url, bookData);
  }
  updateBook(data: any): Observable<any> {
    return this.http.put<any>(this.url, data);
  }
}
