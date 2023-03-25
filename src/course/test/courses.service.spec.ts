import { DatabaseModule } from './../../configuration/database/database.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from '../course.service';
import { Repository } from 'typeorm';
import { CourseEntity } from '../entity/course.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CourseService', () => {
  let courseService: CourseService;
  let courseRepository: Repository<CourseEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourseService,
        {
          provide: getRepositoryToken(CourseEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findOne: jest.fn(),
            createQueryBuilder: jest.fn(),
          },
        },
      ],
      imports: [DatabaseModule],
    }).compile();

    courseService = module.get<CourseService>(CourseService);
    courseRepository = module.get<Repository<CourseEntity>>(
      getRepositoryToken(CourseEntity),
    );
  });

  it('should be defined', () => {
    expect(courseService).toBeDefined();
  });

});
