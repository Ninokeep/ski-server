import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CustomerEntity } from '../../entity/customer/customer.entity';
import { CourseEntity } from './../../entity/course/course.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'syd',
            entities: [CustomerEntity, CourseEntity],
            synchronize: true
        })
    ]
})
export class DatabaseModule {

    constructor(private dataSource: DataSource) { }
}