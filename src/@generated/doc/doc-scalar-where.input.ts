import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
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
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    content?: JsonFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    subjectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    topicId?: IntFilter;
}
