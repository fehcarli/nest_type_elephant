import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './database/entities/book.entity'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: '',
    url: '', //url do serviço de banco aqui
    username: '', //nome do banco a ser utilizado
    password: '',
    database: 'BookCaseDB',
    entities: [Book]
  }), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
