import { Test, TestingModule } from '@nestjs/testing';
import { Book } from 'src/database/entities/book.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

const bookEntityList: Book[] = [
  new Book({
    uuid: "fdfba851-e37c-42a4-8e5b-744f5d6de014",
    Name: "O Xango de Backer Street",
    ReleaseDate: new Date('2002-10-15'),
    ISBN: "132908367888",
    createdAt: "2022-04-14T21:46:17.825Z",
    updatedAt: "2022-04-14T21:46:17.825Z",
  }),
  new Book({
    uuid: "b9983ee0-f3d6-42de-b491-225cd534a459",
    Name: "O Pequeno Principe",
    ReleaseDate: new Date('2002-10-15'),
    ISBN: "132908367888",
    createdAt: "2022-04-14T21:46:17.825Z",
    updatedAt: "2022-04-14T21:46:17.825Z",
  }),
  new Book({
    uuid: "c22032fe-0bf1-44ca-8396-46be5c02b6fd",
    Name: "O Xango de Backer Street",
    ReleaseDate: new Date('2002-10-15'),
    ISBN: "132908367888",
    createdAt: "2022-04-14T21:46:17.825Z",
    updatedAt: "2022-04-14T21:46:17.825Z",
  }),
];

describe('BooksController', () => {
  let controller: BooksController;

  const mockEntity = {
    findAll: jest.fn(),
    create: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    controller = module.get<BooksController>(BooksController);

    mockEntity.create.mockReset();
    mockEntity.findAll.mockReset();
    mockEntity.findOne.mockReset();
    mockEntity.remove.mockReset();
    mockEntity.update.mockReset();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
