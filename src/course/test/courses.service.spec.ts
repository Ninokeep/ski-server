import { DatabaseModule } from './../../configuration/database/database.module';
import { Test, TestingModule } from "@nestjs/testing";
import { CourseService } from "../course.service";
import { Repository } from 'typeorm';
import { CourseEntity } from '../../entity/course/course.entity';
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

                    }
                }

            ],
            imports: [DatabaseModule]
        }).compile();


        courseService = module.get<CourseService>(CourseService);
        courseRepository = module.get<Repository<CourseEntity>>(getRepositoryToken(CourseEntity));

    });

    it('should be defined', () => {
        expect(courseService).toBeDefined();
    });

    it('should CREATE a course (201)', async () => {
        const mockCourse = {
            id: 1,
            name: 'beginner ski',
            price: 440,
            place: 5,
            startDate: new Date(),
            endDate: new Date(),
            level: 'beginner',
            customer: null
        };

        const mockQueryBuilder = {
            select: jest.fn().mockReturnThis(),
            from: jest.fn().mockReturnThis(),
            where: jest.fn().mockReturnThis(),
            andWhere: jest.fn().mockReturnThis(),
            insert: jest.fn().mockReturnThis(),
            into: jest.fn().mockReturnThis(),
            values: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce(mockCourse),
            orderBy: jest.fn().mockReturnThis(),
            getMany: jest.fn().mockResolvedValueOnce(mockCourse)
        };

        jest.spyOn(courseRepository, 'findOne').mockResolvedValueOnce(mockCourse);
        jest.spyOn(courseRepository, 'createQueryBuilder').mockReturnValue(mockQueryBuilder as any);
        jest.spyOn(courseRepository, 'create').mockReturnValueOnce(mockCourse);
        jest.spyOn(courseRepository, 'save').mockResolvedValueOnce(mockCourse);

        const result = await courseService.create(mockCourse);


        expect(result).toEqual(mockCourse);

    })
});