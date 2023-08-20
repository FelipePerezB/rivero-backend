import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DocRelationFilter } from '../doc/doc-relation-filter.input';

@InputType()
export class ScoreWhereInput {

    @Field(() => [ScoreWhereInput], {nullable:true})
    AND?: Array<ScoreWhereInput>;

    @Field(() => [ScoreWhereInput], {nullable:true})
    OR?: Array<ScoreWhereInput>;

    @Field(() => [ScoreWhereInput], {nullable:true})
    NOT?: Array<ScoreWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => DocRelationFilter, {nullable:true})
    document?: DocRelationFilter;
}
