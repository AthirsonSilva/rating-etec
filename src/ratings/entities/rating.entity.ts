import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rating {
  @Column()
  subject: string;

  @Column()
  rating: number;

  @Column()
  positiveMessage: string;

  @Column()
  negativeMessage: string;
}
