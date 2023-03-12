import { CourseDto } from './../dto/course/course.dto';
import { Injectable } from '@nestjs/common';
import { CourseEntity } from '../entity/course/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateCourseDto from '../dto/course/create-course.dto';
@Injectable()
export class CourseService {

  constructor(@InjectRepository(CourseEntity) private courseRepository: Repository<CourseEntity>) { }

  async create(courseRequest: CreateCourseDto): Promise<CourseDto> {

    const existingCourse = await this.courseRepository.findOne({
      where: {
        name: courseRequest.name
      }
    });

    if (existingCourse) {
      throw new Error(`Course with name '${courseRequest.name}' already exists.`);
    }


    await this.courseRepository.createQueryBuilder("course")
      .where("course.name != :name", {
        name: 'snow freeride beginner'
      })
      .insert()
      .into(CourseEntity)
      .values(courseRequest)
      .execute();

    return courseRequest;
  }

  findAll(): Promise<CourseDto[]> {
    return this.courseRepository.find();
  }

  findOne(id: number): Promise<CourseDto> {
    return this.courseRepository.findOneBy({ id });
  }
}
