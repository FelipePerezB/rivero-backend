import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { TopicListRelationFilter } from '../topic/topic-list-relation-filter.input';
import { SubtopicListRelationFilter } from '../subtopic/subtopic-list-relation-filter.input';
import { DocListRelationFilter } from '../doc/doc-list-relation-filter.input';

@InputType()
export class SubjectWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [SubjectWhereInput], {nullable:true})
    AND?: Array<SubjectWhereInput>;

    @Field(() => [SubjectWhereInput], {nullable:true})
    OR?: Array<SubjectWhereInput>;

    @Field(() => [SubjectWhereInput], {nullable:true})
    NOT?: Array<SubjectWhereInput>;

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

    @Field(() => DocListRelationFilter, {nullable:true})
    Docs?: DocListRelationFilter;
}
