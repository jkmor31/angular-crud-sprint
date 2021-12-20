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
    return this.http.get(this.url);
  }
  getBook(id: number) {
  return this.http.get(this.url + '/' + id);
  }

  deleteBooks(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  createBook(bookData: Object) {
    return this.http.post(this.url, bookData);
  }
  updateBook(bookData: Object) {
    return this.http.put(this.url, bookData);
  }
}
