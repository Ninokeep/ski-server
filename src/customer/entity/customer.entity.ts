import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from '../../course/entity/course.entity';

import { IsEmail } from 'class-validator';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @IsEmail()
  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  gender: string;

  @Column()
  password: string;

  @OneToMany(() => CourseEntity, (course) => course.customer)
  course: CourseEntity[];
}
