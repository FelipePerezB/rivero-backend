import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class NoteScalarWhereWithAggregatesInput {

    @Field(() => [NoteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NoteScalarWhereWithAggregatesInput>;

    @Field(() => [NoteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NoteScalarWhereWithAggregatesInput>;

    @Field(() => [NoteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NoteScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    subjectId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    topicId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    subtopicId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    fileId?: IntWithAggregatesFilter;
}
