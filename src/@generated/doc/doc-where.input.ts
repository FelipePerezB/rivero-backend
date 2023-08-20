import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPrivacityFilter } from '../prisma/enum-privacity-filter.input';
import { EnumDocTypesFilter } from '../prisma/enum-doc-types-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ScoreListRelationFilter } from '../score/score-list-relation-filter.input';
import { SubjectRelationFilter } from '../subject/subject-relation-filter.input';
import { TopicRelationFilter } from '../topic/topic-relation-filter.input';
import { SubtopicNullableRelationFilter } from '../prisma/subtopic-nullable-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

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

    @Field(() => ScoreListRelationFilter, {nullable:true})
    Score?: ScoreListRelationFilter;

    @Field(() => SubjectRelationFilter, {nullable:true})
    Subject?: SubjectRelationFilter;

    @Field(() => TopicRelationFilter, {nullable:true})
    Topic?: TopicRelationFilter;

    @Field(() => SubtopicNullableRelationFilter, {nullable:true})
    Subtopic?: SubtopicNullableRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    Author?: UserRelationFilter;
}
