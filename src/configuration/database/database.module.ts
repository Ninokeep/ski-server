import { MonitorEntity } from './../../monitor/entity/monitor.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CustomerEntity } from '../../customer/entity/customer.entity';
import { CourseEntity } from '../../course/entity/course.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'syd',
      entities: [CustomerEntity, CourseEntity, MonitorEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {
  constructor(private dataSource: DataSource) { }
}

