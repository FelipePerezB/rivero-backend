import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { GradeRelationFilter } from '../grade/grade-relation-filter.input';
import { SchoolRelationFilter } from '../school/school-relation-filter.input';
import { ScoreListRelationFilter } from '../score/score-list-relation-filter.input';
import { DocListRelationFilter } from '../doc/doc-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastname?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    stars?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => StringFilter, {nullable:true})
    nickname?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    gradeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;

    @Field(() => GradeRelationFilter, {nullable:true})
    grade?: GradeRelationFilter;

    @Field(() => SchoolRelationFilter, {nullable:true})
    school?: SchoolRelationFilter;

    @Field(() => ScoreListRelationFilter, {nullable:true})
    Score?: ScoreListRelationFilter;

    @Field(() => DocListRelationFilter, {nullable:true})
    Doc?: DocListRelationFilter;
}
