import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { TopicRelationFilter } from '../topic/topic-relation-filter.input';
import { GradesOnDocsListRelationFilter } from '../grades-on-docs/grades-on-docs-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ScoreListRelationFilter } from '../score/score-list-relation-filter.input';

@InputType()
export class DocWhereInput {

    @Field(() => [DocWhereInput], {nullable:true})
    AND?: Array<DocWhereInput>;

    @Field(() => [DocWhereInput], {nullable:true})
    OR?: Array<DocWhereInput>;

    @Field(() => [DocWhereInput], {nullable:true})
    NOT?: Array<DocWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    content?: JsonFilter;

    @Field(() => IntFilter, {nullable:true})
    topicId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => TopicRelationFilter, {nullable:true})
    topic?: TopicRelationFilter;

    @Field(() => GradesOnDocsListRelationFilter, {nullable:true})
    grades?: GradesOnDocsListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => ScoreListRelationFilter, {nullable:true})
    Score?: ScoreListRelationFilter;
}
