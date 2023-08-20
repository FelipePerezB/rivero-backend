import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class SubtopicScalarWhereInput {

    @Field(() => [SubtopicScalarWhereInput], {nullable:true})
    AND?: Array<SubtopicScalarWhereInput>;

    @Field(() => [SubtopicScalarWhereInput], {nullable:true})
    OR?: Array<SubtopicScalarWhereInput>;

    @Field(() => [SubtopicScalarWhereInput], {nullable:true})
    NOT?: Array<SubtopicScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    subjectId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    topicId?: IntFilter;
}
