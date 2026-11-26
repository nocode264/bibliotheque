import { Controller, Get, Param } from '@nestjs/common';
import { Book } from '../interface/book.provider.js';
import { BooksService } from '../service/books.service.js';
import { BooksLoggerService } from '../provider/BooksLoggerService.js';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll(): Book[]{
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Book | undefined {
    return this.booksService.findOne(Number(id));
  }
}
