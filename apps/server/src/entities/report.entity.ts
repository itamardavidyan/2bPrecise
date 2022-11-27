import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne, RelationId } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Report {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	text: string;

	@Column({ nullable: false })
	createdAt: Date;

	@ManyToOne(() => Employee, { nullable: false })
    @JoinColumn()
	employee: Employee;

	@ManyToOne(() => Employee, { nullable: false })
    @JoinColumn()
    manager: Employee;

	@RelationId((report: Report) => report.manager)
    managerId: number;
}
