import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { GradesOnDocs } from '../grades-on-docs/grades-on-docs.model';
import { GradesOnSchools } from '../grades-on-schools/grades-on-schools.model';
import { GradeCount } from './grade-count.output';

@ObjectType()
export class Grade {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    grade!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [GradesOnDocs], {nullable:true})
    docs?: Array<GradesOnDocs>;

    @Field(() => [GradesOnSchools], {nullable:true})
    schools?: Array<GradesOnSchools>;

    @Field(() => GradeCount, {nullable:false})
    _count?: GradeCount;
}
