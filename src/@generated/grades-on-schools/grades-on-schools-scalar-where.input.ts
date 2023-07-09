import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class GradesOnSchoolsScalarWhereInput {

    @Field(() => [GradesOnSchoolsScalarWhereInput], {nullable:true})
    AND?: Array<GradesOnSchoolsScalarWhereInput>;

    @Field(() => [GradesOnSchoolsScalarWhereInput], {nullable:true})
    OR?: Array<GradesOnSchoolsScalarWhereInput>;

    @Field(() => [GradesOnSchoolsScalarWhereInput], {nullable:true})
    NOT?: Array<GradesOnSchoolsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    gradeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;
}
