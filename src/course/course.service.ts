import { CourseDto } from './dto/course.dto';
import { Injectable } from '@nestjs/common';
import { CourseEntity } from './entity/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateCourseDto from './dto/create-course.dto';
import UpdateCourseDto from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
  ) { }

  async create(courseRequest: CreateCourseDto): Promise<CourseDto> {
    const existingCourse = await this.courseRepository.findOne({
      where: {
        name: courseRequest.name,
      },
    });

    await this.courseRepository
      .createQueryBuilder('course')
      .where('course.name != :name', {
        name: 'snow freeride beginner',
      })
      .insert()
      .into(CourseEntity)
      .values(courseRequest)
      .execute();

    return courseRequest;
  }

  async findAll(): Promise<CourseDto[]> {
    return await this.courseRepository.find();
  }

  async findOne(id: number): Promise<CourseDto> {
    return await this.courseRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateCourseDto: UpdateCourseDto,
  ): Promise<UpdateCourseDto[]> {
    const courseUpdated = (
      await this.courseRepository.update(id, updateCourseDto)
    ).affected;

    if (!courseUpdated) {
      return [];
    }

    return [updateCourseDto];
  }
}
