import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NoteWhereInput } from './note-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { TopicNullableRelationFilter } from '../prisma/topic-nullable-relation-filter.input';
import { SubtopicRelationFilter } from '../subtopic/subtopic-relation-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
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

    @Field(() => IntFilter, {nullable:true})
    subtopicId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    fileId?: IntFilter;

    @Field(() => SubjectNullableRelationFilter, {nullable:true})
    Subject?: SubjectNullableRelationFilter;

    @Field(() => TopicNullableRelationFilter, {nullable:true})
    Topic?: TopicNullableRelationFilter;

    @Field(() => SubtopicRelationFilter, {nullable:true})
    Subtopic?: SubtopicRelationFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    File?: FileRelationFilter;

    @Field(() => ScoreListRelationFilter, {nullable:true})
    Scores?: ScoreListRelationFilter;
}
