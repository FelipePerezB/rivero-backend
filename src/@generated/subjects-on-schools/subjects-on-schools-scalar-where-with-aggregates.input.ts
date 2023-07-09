import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class SubjectsOnSchoolsScalarWhereWithAggregatesInput {

    @Field(() => [SubjectsOnSchoolsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubjectsOnSchoolsScalarWhereWithAggregatesInput>;

    @Field(() => [SubjectsOnSchoolsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubjectsOnSchoolsScalarWhereWithAggregatesInput>;

    @Field(() => [SubjectsOnSchoolsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubjectsOnSchoolsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    subjectId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    schoolId?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
