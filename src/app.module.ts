import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { DatabaseModule } from './configuration/database/database.module';
import { MonitorModule } from './monitor/monitor.module';

@Module({
  imports: [CourseModule, DatabaseModule, MonitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
