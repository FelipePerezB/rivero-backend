import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class GradeScalarWhereWithAggregatesInput {

    @Field(() => [GradeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GradeScalarWhereWithAggregatesInput>;

    @Field(() => [GradeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GradeScalarWhereWithAggregatesInput>;

    @Field(() => [GradeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GradeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    grade?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
