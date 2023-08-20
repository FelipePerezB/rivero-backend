import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPrivacityFilter } from '../prisma/enum-privacity-filter.input';
import { EnumDocTypesFilter } from '../prisma/enum-doc-types-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class DocScalarWhereInput {

    @Field(() => [DocScalarWhereInput], {nullable:true})
    AND?: Array<DocScalarWhereInput>;

    @Field(() => [DocScalarWhereInput], {nullable:true})
    OR?: Array<DocScalarWhereInput>;

    @Field(() => [DocScalarWhereInput], {nullable:true})
    NOT?: Array<DocScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    externalId?: StringFilter;

    @Field(() => EnumPrivacityFilter, {nullable:true})
    privacity?: EnumPrivacityFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => EnumDocTypesFilter, {nullable:true})
    type?: EnumDocTypesFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    subjectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    topicId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    subtopicId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;
}
