import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPrivacityWithAggregatesFilter } from '../prisma/enum-privacity-with-aggregates-filter.input';
import { EnumDocTypesWithAggregatesFilter } from '../prisma/enum-doc-types-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
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
    externalId?: StringWithAggregatesFilter;

    @Field(() => EnumPrivacityWithAggregatesFilter, {nullable:true})
    privacity?: EnumPrivacityWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => EnumDocTypesWithAggregatesFilter, {nullable:true})
    type?: EnumDocTypesWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    subjectId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    topicId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    subtopicId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
