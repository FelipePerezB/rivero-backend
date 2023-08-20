import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { GradesOnSchoolsListRelationFilter } from '../grades-on-schools/grades-on-schools-list-relation-filter.input';

@InputType()
export class GradeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    grade?: string;

    @Field(() => [GradeWhereInput], {nullable:true})
    AND?: Array<GradeWhereInput>;

    @Field(() => [GradeWhereInput], {nullable:true})
    OR?: Array<GradeWhereInput>;

    @Field(() => [GradeWhereInput], {nullable:true})
    NOT?: Array<GradeWhereInput>;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => GradesOnSchoolsListRelationFilter, {nullable:true})
    schools?: GradesOnSchoolsListRelationFilter;
}
