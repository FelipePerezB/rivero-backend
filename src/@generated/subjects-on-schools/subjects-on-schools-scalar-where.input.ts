import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SubjectsOnSchoolsScalarWhereInput {

    @Field(() => [SubjectsOnSchoolsScalarWhereInput], {nullable:true})
    AND?: Array<SubjectsOnSchoolsScalarWhereInput>;

    @Field(() => [SubjectsOnSchoolsScalarWhereInput], {nullable:true})
    OR?: Array<SubjectsOnSchoolsScalarWhereInput>;

    @Field(() => [SubjectsOnSchoolsScalarWhereInput], {nullable:true})
    NOT?: Array<SubjectsOnSchoolsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    subjectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;
}
