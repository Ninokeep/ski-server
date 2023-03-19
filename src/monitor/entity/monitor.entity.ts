import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from '../../course/entity/course.entity';

import { IsEmail } from 'class-validator';

@Entity('monitors')
export class MonitorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @IsEmail()
    @Column({ unique: true })
    email: string;

    @Column()
    age: number;

    @Column()
    password: string;

    @ManyToOne(() => CourseEntity, (course) => course.monitor)
    course: CourseEntity;
}
