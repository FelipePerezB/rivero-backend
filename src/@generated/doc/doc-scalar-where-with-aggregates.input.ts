import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class DocScalarWhereWithAggregatesInput {

    @Field(() => [DocScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DocScalarWhereWithAggregatesInput>;

    @Field(() => [DocScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DocScalarWhereWithAggregatesInput>;

    @Field(() => [DocScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DocScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    content?: JsonWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    subjectId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    topicId?: IntWithAggregatesFilter;
}
