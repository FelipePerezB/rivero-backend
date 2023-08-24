import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { SchoolRelationFilter } from '../school/school-relation-filter.input';

@InputType()
export class GradeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [GradeWhereInput], {nullable:true})
    AND?: Array<GradeWhereInput>;

    @Field(() => [GradeWhereInput], {nullable:true})
    OR?: Array<GradeWhereInput>;

    @Field(() => [GradeWhereInput], {nullable:true})
    NOT?: Array<GradeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    Users?: UserListRelationFilter;

    @Field(() => SchoolRelationFilter, {nullable:true})
    School?: SchoolRelationFilter;
}
