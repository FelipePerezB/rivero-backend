import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NoteWhereInput } from './note-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumTypesFilter } from '../prisma/enum-types-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { TopicNullableRelationFilter } from '../prisma/topic-nullable-relation-filter.input';
import { SubtopicNullableRelationFilter } from '../prisma/subtopic-nullable-relation-filter.input';
import { FileNullableRelationFilter } from '../prisma/file-nullable-relation-filter.input';
import { ScoreListRelationFilter } from '../score/score-list-relation-filter.input';

@InputType()
export class NoteWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [NoteWhereInput], {nullable:true})
    AND?: Array<NoteWhereInput>;

    @Field(() => [NoteWhereInput], {nullable:true})
    OR?: Array<NoteWhereInput>;

    @Field(() => [NoteWhereInput], {nullable:true})
    NOT?: Array<NoteWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    subjectId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    topicId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    subtopicId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fileId?: IntNullableFilter;

    @Field(() => EnumTypesFilter, {nullable:true})
    type?: EnumTypesFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => SubjectNullableRelationFilter, {nullable:true})
    Subject?: SubjectNullableRelationFilter;

    @Field(() => TopicNullableRelationFilter, {nullable:true})
    Topic?: TopicNullableRelationFilter;

    @Field(() => SubtopicNullableRelationFilter, {nullable:true})
    Subtopic?: SubtopicNullableRelationFilter;

    @Field(() => FileNullableRelationFilter, {nullable:true})
    File?: FileNullableRelationFilter;

    @Field(() => ScoreListRelationFilter, {nullable:true})
    Scores?: ScoreListRelationFilter;
}
