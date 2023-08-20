import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { DocListRelationFilter } from '../doc/doc-list-relation-filter.input';
import { SubtopicListRelationFilter } from '../subtopic/subtopic-list-relation-filter.input';

@InputType()
export class TopicWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [TopicWhereInput], {nullable:true})
    AND?: Array<TopicWhereInput>;

    @Field(() => [TopicWhereInput], {nullable:true})
    OR?: Array<TopicWhereInput>;

    @Field(() => [TopicWhereInput], {nullable:true})
    NOT?: Array<TopicWhereInput>;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    subjectId?: IntNullableFilter;

    @Field(() => SubjectNullableRelationFilter, {nullable:true})
    subject?: SubjectNullableRelationFilter;

    @Field(() => DocListRelationFilter, {nullable:true})
    Doc?: DocListRelationFilter;

    @Field(() => SubtopicListRelationFilter, {nullable:true})
    Subtopic?: SubtopicListRelationFilter;
}
