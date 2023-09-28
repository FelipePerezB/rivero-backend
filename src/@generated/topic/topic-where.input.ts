import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { SubtopicListRelationFilter } from '../subtopic/subtopic-list-relation-filter.input';
import { NoteListRelationFilter } from '../note/note-list-relation-filter.input';

@InputType()
export class TopicWhereInput {

    @Field(() => [TopicWhereInput], {nullable:true})
    AND?: Array<TopicWhereInput>;

    @Field(() => [TopicWhereInput], {nullable:true})
    OR?: Array<TopicWhereInput>;

    @Field(() => [TopicWhereInput], {nullable:true})
    NOT?: Array<TopicWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    subjectId?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => SubjectNullableRelationFilter, {nullable:true})
    Subject?: SubjectNullableRelationFilter;

    @Field(() => SubtopicListRelationFilter, {nullable:true})
    Subtopics?: SubtopicListRelationFilter;

    @Field(() => NoteListRelationFilter, {nullable:true})
    Notes?: NoteListRelationFilter;
}
