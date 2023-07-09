import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { SubjectsOnSchools } from '../subjects-on-schools/subjects-on-schools.model';
import { GradesOnSchools } from '../grades-on-schools/grades-on-schools.model';
import { SchoolCount } from './school-count.output';

@ObjectType()
export class School {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [SubjectsOnSchools], {nullable:true})
    subjects?: Array<SubjectsOnSchools>;

    @Field(() => [GradesOnSchools], {nullable:true})
    grades?: Array<GradesOnSchools>;

    @Field(() => SchoolCount, {nullable:false})
    _count?: SchoolCount;
}
