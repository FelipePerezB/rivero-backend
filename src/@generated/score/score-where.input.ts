import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubjectRelationFilter } from '../subject/subject-relation-filter.input';
import { TopicRelationFilter } from '../topic/topic-relation-filter.input';
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

    @Field(() => SubjectRelationFilter, {nullable:true})
    subject?: SubjectRelationFilter;

    @Field(() => TopicRelationFilter, {nullable:true})
    topic?: TopicRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => DocRelationFilter, {nullable:true})
    document?: DocRelationFilter;
}
