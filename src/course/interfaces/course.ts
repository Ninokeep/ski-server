import { Customer } from '../../customer/interfaces/customer';

export interface Course {
  id: number;

  name: string;

  price: number;

  place: number;

  startDate: Date;

  endDate: Date;

  level: string;

  customer?: Customer;
}
