import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScoreWhereInput } from './score-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { NoteNullableRelationFilter } from '../prisma/note-nullable-relation-filter.input';

@InputType()
export class ScoreWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ScoreWhereInput], {nullable:true})
    AND?: Array<ScoreWhereInput>;

    @Field(() => [ScoreWhereInput], {nullable:true})
    OR?: Array<ScoreWhereInput>;

    @Field(() => [ScoreWhereInput], {nullable:true})
    NOT?: Array<ScoreWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    score?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    alternatives?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    noteId?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => NoteNullableRelationFilter, {nullable:true})
    Note?: NoteNullableRelationFilter;
}
