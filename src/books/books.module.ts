import { Module } from '@nestjs/common';
import { BooksController } from './controller/books.controller.js';
import { BooksService } from './service/books.service.js';
import { BooksLoggerService } from './provider/BooksLoggerService.js';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksLoggerService],
})
export class BooksModule {}
