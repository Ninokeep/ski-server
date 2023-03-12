import { CourseDto } from './../dto/course/course.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import CreateCourseDto from '../dto/course/create-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) { }

  @Get()
  findAll(): Promise<CourseDto[]> {
    return this.courseService.findAll();
  }

  @Post()
  create(@Body() course: CreateCourseDto): Promise<CourseDto> {
    return this.courseService.create(course);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CourseDto> {
    return this.courseService.findOne(id);
  }

}
