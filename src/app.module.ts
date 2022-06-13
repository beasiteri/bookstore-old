import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/library'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
