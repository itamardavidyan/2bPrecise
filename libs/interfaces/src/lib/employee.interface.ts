import { IPerson } from './person.interface';

export interface IEmployee extends IPerson {
	managerId: number
}
