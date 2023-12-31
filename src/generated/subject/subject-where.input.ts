import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { TopicListRelationFilter } from '../topic/topic-list-relation-filter.input';
import { SubtopicListRelationFilter } from '../subtopic/subtopic-list-relation-filter.input';
import { NoteListRelationFilter } from '../note/note-list-relation-filter.input';

@InputType()
export class SubjectWhereInput {

    @Field(() => [SubjectWhereInput], {nullable:true})
    AND?: Array<SubjectWhereInput>;

    @Field(() => [SubjectWhereInput], {nullable:true})
    OR?: Array<SubjectWhereInput>;

    @Field(() => [SubjectWhereInput], {nullable:true})
    NOT?: Array<SubjectWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    color?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => TopicListRelationFilter, {nullable:true})
    Topics?: TopicListRelationFilter;

    @Field(() => SubtopicListRelationFilter, {nullable:true})
    Subtopic?: SubtopicListRelationFilter;

    @Field(() => NoteListRelationFilter, {nullable:true})
    Notes?: NoteListRelationFilter;
}
