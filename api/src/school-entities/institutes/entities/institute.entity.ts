import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { Subject } from 'api/src/school-entities/subjects/entities/subjects.entity';
import { User } from 'api/src/user-entities/users/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Institute {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  @Field(() => GraphQLISODateTime)
  createdAt: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  @Field(() => GraphQLISODateTime, { nullable: true })
  updatedAt: string;

  @OneToMany(() => User, (user) => user.id, { nullable: true })
  users: User[];

  @ManyToMany(() => Subject, (subject) => subject.id, { nullable: true })
  @JoinTable({
    name: 'instututes_categories', //nombre de la tabla que tambien puede ser products_has_categories
    joinColumn: {
      name: 'institute_id', // Relación con la entidad donde estas situado.
    },
    inverseJoinColumn: {
      name: 'subject_id', // Relación con la otra entidad.
    },
  })
  subjects: Subject[];
}
