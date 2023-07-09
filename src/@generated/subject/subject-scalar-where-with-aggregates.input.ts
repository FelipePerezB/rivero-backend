import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class SubjectScalarWhereWithAggregatesInput {

    @Field(() => [SubjectScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubjectScalarWhereWithAggregatesInput>;

    @Field(() => [SubjectScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubjectScalarWhereWithAggregatesInput>;

    @Field(() => [SubjectScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubjectScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    color?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
