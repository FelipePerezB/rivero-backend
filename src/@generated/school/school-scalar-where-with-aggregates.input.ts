import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class SchoolScalarWhereWithAggregatesInput {

    @Field(() => [SchoolScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SchoolScalarWhereWithAggregatesInput>;

    @Field(() => [SchoolScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SchoolScalarWhereWithAggregatesInput>;

    @Field(() => [SchoolScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SchoolScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
