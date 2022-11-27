import { Entity, Column, RelationId, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Report } from './report.entity';
import { Task } from './task.entity';

@Entity()
export class Employee {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	firstName: string;

	@Column({ nullable: false })
	lastName: string;

	@Column({ nullable: false })
	position: string;

	@ManyToOne(() => Employee)
    @JoinColumn()
    manager: Employee;

	@RelationId((employee: Employee) => employee.manager)
    managerId: number;

	@OneToMany(() => Report, (report: Report) => report.manager)
    reports: Report[]

	@OneToMany(() => Task, (task: Task) => task.employee)
    tasks: Task[]

}
