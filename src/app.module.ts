import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { DatabaseModule } from './configuration/database/database.module';

@Module({
  imports: [CourseModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
