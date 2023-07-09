import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ScoreScalarWhereInput {

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    AND?: Array<ScoreScalarWhereInput>;

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    OR?: Array<ScoreScalarWhereInput>;

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    NOT?: Array<ScoreScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    score?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    subjectId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    topicId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    correct?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    total?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    wrong?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    null?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    docId?: IntFilter;

    @Field(() => JsonFilter, {nullable:true})
    alternatives?: JsonFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;
}
