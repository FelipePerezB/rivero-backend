import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { SubjectNullableRelationFilter } from '../prisma/subject-nullable-relation-filter.input';
import { TopicRelationFilter } from '../topic/topic-relation-filter.input';
import { DocListRelationFilter } from '../doc/doc-list-relation-filter.input';

@InputType()
export class SubtopicWhereInput {

    @Field(() => [SubtopicWhereInput], {nullable:true})
    AND?: Array<SubtopicWhereInput>;

    @Field(() => [SubtopicWhereInput], {nullable:true})
    OR?: Array<SubtopicWhereInput>;

    @Field(() => [SubtopicWhereInput], {nullable:true})
    NOT?: Array<SubtopicWhereInput>;

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

    @Field(() => IntFilter, {nullable:true})
    topicId?: IntFilter;

    @Field(() => SubjectNullableRelationFilter, {nullable:true})
    subject?: SubjectNullableRelationFilter;

    @Field(() => TopicRelationFilter, {nullable:true})
    Topic?: TopicRelationFilter;

    @Field(() => DocListRelationFilter, {nullable:true})
    Doc?: DocListRelationFilter;
}
