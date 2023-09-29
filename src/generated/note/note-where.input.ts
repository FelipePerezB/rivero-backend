import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumTypesFilter } from '../prisma/enum-types-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { TopicNullableRelationFilter } from '../prisma/topic-nullable-relation-filter.input';
import { SubtopicRelationFilter } from '../subtopic/subtopic-relation-filter.input';
import { FileNullableRelationFilter } from '../prisma/file-nullable-relation-filter.input';
import { ScoreListRelationFilter } from '../score/score-list-relation-filter.input';

@InputType()
export class NoteWhereInput {

    @Field(() => [NoteWhereInput], {nullable:true})
    AND?: Array<NoteWhereInput>;

    @Field(() => [NoteWhereInput], {nullable:true})
    OR?: Array<NoteWhereInput>;

    @Field(() => [NoteWhereInput], {nullable:true})
    NOT?: Array<NoteWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    subjectId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    topicId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    subtopicId?: IntFilter;

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

    @Field(() => SubtopicRelationFilter, {nullable:true})
    Subtopic?: SubtopicRelationFilter;

    @Field(() => FileNullableRelationFilter, {nullable:true})
    File?: FileNullableRelationFilter;

    @Field(() => ScoreListRelationFilter, {nullable:true})
    Scores?: ScoreListRelationFilter;
}
