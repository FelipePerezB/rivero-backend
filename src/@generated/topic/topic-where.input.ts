import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { DocListRelationFilter } from '../doc/doc-list-relation-filter.input';
import { SubtopicListRelationFilter } from '../subtopic/subtopic-list-relation-filter.input';

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
