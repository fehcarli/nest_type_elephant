import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './database/entities/book.entity'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: "", //o endereço de hospedagem do host
    url: "", //url do serviço de banco aqui
    username: "", //nome do serviço a ser utilizado
    password: "", //hash da senha do serviço
    database: 'BookCaseDB',
    entities: [Book]
  }), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
