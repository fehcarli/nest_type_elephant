import { Controller, Get, Post, 
        Body, Patch, Param, 
        ParseUUIDPipe, Delete } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('api/books')
export class BooksController {
  constructor(
    private booksService: BooksService
    ) {}

  @ApiResponse({ status: 200, type: 'success'})
  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @ApiResponse({ status: 200, type: 'success'})
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @ApiResponse({ status: 200, type: 'success'})
  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.booksService.findOne(uuid);
  }

  @ApiResponse({ status: 200, type: 'success'})
  @Patch(':uuid')
  update(@Param('uuid', new ParseUUIDPipe()) uuid: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(uuid, updateBookDto);
  }

  @ApiResponse({ status: 200, type: 'success'})
  @Delete(':uuid')
  remove(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.booksService.remove(uuid);
  }
}
