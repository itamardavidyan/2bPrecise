import { Person } from './person.interface';

export interface Employee extends Person {
	managerId: number
}
