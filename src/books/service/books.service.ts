import { Injectable } from '@nestjs/common';
import { Book } from '../interface/book.provider.js';
import { BooksLoggerService } from '../provider/BooksLoggerService.js';

@Injectable()
export class BooksService {
   private readonly books: Book[] = [
        {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'},
        {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
   ];

   constructor(private readonly logger: BooksLoggerService) {}
   
   findAll(): Book[]{
     this.logger.log('Finding all books');
     return this.books;
   }

   findOne(id: number): Book | undefined {
        this.logger.log(`Finding book with id: ${id}`);
        return this.books.find(book => book.id === id);
    }
}
