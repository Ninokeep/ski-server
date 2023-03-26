import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { DatabaseModule } from './configuration/database/database.module';
import { MonitorModule } from './monitor/monitor.module';
import { AuthModule } from './auth/module/auth.module';
import { AuthController } from './auth/controller/auth.controller';
import { AuthService } from './auth/service/auth.service';

@Module({
  imports: [CourseModule, DatabaseModule, MonitorModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule { }
