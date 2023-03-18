import { CourseDto } from './dto/course.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import CreateCourseDto from './dto/create-course.dto';
import UpdateCourseDto from './dto/update-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

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
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() course: UpdateCourseDto,
  ): Promise<UpdateCourseDto[]> {
    return this.courseService.update(id, course);
  }
}
