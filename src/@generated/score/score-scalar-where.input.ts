import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
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
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    alternatives?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    docId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;
}
