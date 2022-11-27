import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	text: string;

	@Column({ nullable: false })
	createdAt: Date;

	@Column({ nullable: false })
	dueDate: Date;

	@ManyToOne(() => Employee, { nullable: false })
    @JoinColumn()
	employee: Employee;

	@RelationId((task: Task) => task.employee)
    employeeId: number;

	@ManyToOne(() => Employee, { nullable: false })
    @JoinColumn()
    manager: Employee;

	@RelationId((task: Task) => task.manager)
    managerId: number;

}
