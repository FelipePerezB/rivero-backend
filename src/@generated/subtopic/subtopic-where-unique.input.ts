import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { TopicRelationFilter } from '../topic/topic-relation-filter.input';
import { NoteListRelationFilter } from '../note/note-list-relation-filter.input';

@InputType()
export class SubtopicWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [SubtopicWhereInput], {nullable:true})
    AND?: Array<SubtopicWhereInput>;

    @Field(() => [SubtopicWhereInput], {nullable:true})
    OR?: Array<SubtopicWhereInput>;

    @Field(() => [SubtopicWhereInput], {nullable:true})
    NOT?: Array<SubtopicWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    subjectId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    topicId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => SubjectNullableRelationFilter, {nullable:true})
    Subject?: SubjectNullableRelationFilter;

    @Field(() => TopicRelationFilter, {nullable:true})
    Topic?: TopicRelationFilter;

    @Field(() => NoteListRelationFilter, {nullable:true})
    Notes?: NoteListRelationFilter;
}
