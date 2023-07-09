import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubjectRelationFilter } from '../subject/subject-relation-filter.input';
import { SchoolRelationFilter } from '../school/school-relation-filter.input';

@InputType()
export class SubjectsOnSchoolsWhereInput {

    @Field(() => [SubjectsOnSchoolsWhereInput], {nullable:true})
    AND?: Array<SubjectsOnSchoolsWhereInput>;

    @Field(() => [SubjectsOnSchoolsWhereInput], {nullable:true})
    OR?: Array<SubjectsOnSchoolsWhereInput>;

    @Field(() => [SubjectsOnSchoolsWhereInput], {nullable:true})
    NOT?: Array<SubjectsOnSchoolsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    subjectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => SubjectRelationFilter, {nullable:true})
    Subject?: SubjectRelationFilter;

    @Field(() => SchoolRelationFilter, {nullable:true})
    School?: SchoolRelationFilter;
}
