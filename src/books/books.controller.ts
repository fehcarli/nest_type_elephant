import { Controller, Get, Post, Body, Patch, Param, ParseUUIDPipe, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('api/books')
export class BooksController {
  constructor(
    private booksService: BooksService
    ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.booksService.findOne(uuid);
  }

  @Patch(':uuid')
  update(@Param('uuid', new ParseUUIDPipe()) uuid: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(uuid, updateBookDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.booksService.remove(uuid);
  }
}
