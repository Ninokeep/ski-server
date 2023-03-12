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
                        save: jest.fn()
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
            name: 'beginner snowboard',
            price: 440,
            place: 5,
            startDate: new Date(),
            endDate: new Date(),
            level: 'beginner',
            customer: null
        };

        jest.spyOn(courseRepository, 'create').mockReturnValueOnce(mockCourse);
        jest.spyOn(courseRepository, 'save').mockResolvedValueOnce(mockCourse);

        const result = await courseService.create(mockCourse);
        expect(courseRepository.create).toHaveBeenCalledTimes(1);
        expect(courseRepository.create).toHaveBeenCalledWith(mockCourse);
        expect(courseRepository.save).toHaveBeenCalledTimes(1);
        expect(courseRepository.save).toHaveBeenCalledWith(mockCourse);
        expect(result).toEqual(mockCourse);

    })
});