import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CustomerEntity } from '../../customer/entity/customer.entity';

@Entity('courses')
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  place: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  level: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.course)
  customer: CustomerEntity;
}
