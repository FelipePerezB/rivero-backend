import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { GradeRelationFilter } from '../grade/grade-relation-filter.input';
import { SchoolRelationFilter } from '../school/school-relation-filter.input';
import { ScoreListRelationFilter } from '../score/score-list-relation-filter.input';
import { DocListRelationFilter } from '../doc/doc-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    externalId?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => IntFilter, {nullable:true})
    gradeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => GradeRelationFilter, {nullable:true})
    Grade?: GradeRelationFilter;

    @Field(() => SchoolRelationFilter, {nullable:true})
    School?: SchoolRelationFilter;

    @Field(() => ScoreListRelationFilter, {nullable:true})
    Score?: ScoreListRelationFilter;

    @Field(() => DocListRelationFilter, {nullable:true})
    Doc?: DocListRelationFilter;
}
