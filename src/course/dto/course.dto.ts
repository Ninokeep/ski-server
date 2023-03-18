import { CustomerDto } from '../../customer/dto/customer.dto';
export class CourseDto {
  id: number;

  name: string;

  price: number;

  place: number;

  startDate: Date;

  endDate: Date;

  level: string;

  customer?: CustomerDto;
}
