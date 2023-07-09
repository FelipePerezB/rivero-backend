import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class GradesOnSchoolsScalarWhereWithAggregatesInput {

    @Field(() => [GradesOnSchoolsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GradesOnSchoolsScalarWhereWithAggregatesInput>;

    @Field(() => [GradesOnSchoolsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GradesOnSchoolsScalarWhereWithAggregatesInput>;

    @Field(() => [GradesOnSchoolsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GradesOnSchoolsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    gradeId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    schoolId?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
