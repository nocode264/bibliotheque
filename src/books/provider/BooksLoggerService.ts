import { Injectable } from "@nestjs/common";

@Injectable()
export class BooksLoggerService {  
    log(message: string):void {
        console.log(message);
    }
}