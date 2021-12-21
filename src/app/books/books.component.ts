import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  bookData: Book = {id: 0,  title: '', subtitle: '', author: '', pages: 0, price: 0, description: '' };
  updatedBook: Book = {id: 0,  title: '', subtitle: '', author: '', pages: 0, price: 0, description: '' };
  array = [];
  keys: string[] = [];


  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    this.bookService.getBooks().subscribe(payload =>{
      this.books = payload;});
  }
  deleteBook(id: number) {
    this.bookService.deleteBooks(id).subscribe(response => {
      this.books = this.books.filter(item => item.id !== id);
    });
    this.getBooks();
  }
  addBook(){
    this.bookService.createBook(this.bookData).subscribe(payload =>{
      console.log(payload);
    });
    this.getBooks();
  }
  update(id: number){
    this.bookService.getBook(id).subscribe(payload =>{
      this.array = Object.values(payload);
      this.keys = Object.keys(payload);});
  }
  
  changeBook(data: any){
    this.bookService.updateBook(data).subscribe(payload =>{
      console.log(payload);
    });
    this.getBooks();
  }
}
