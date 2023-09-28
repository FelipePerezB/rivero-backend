import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { SubjectOrderByWithRelationInput } from '../subject/subject-order-by-with-relation.input';
import { TopicOrderByWithRelationInput } from '../topic/topic-order-by-with-relation.input';
import { SubtopicOrderByWithRelationInput } from '../subtopic/subtopic-order-by-with-relation.input';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { ScoreOrderByRelationAggregateInput } from '../score/score-order-by-relation-aggregate.input';

@InputType()
export class NoteOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subjectId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    topicId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    subtopicId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;

    @Field(() => SubjectOrderByWithRelationInput, {nullable:true})
    Subject?: SubjectOrderByWithRelationInput;

    @Field(() => TopicOrderByWithRelationInput, {nullable:true})
    Topic?: TopicOrderByWithRelationInput;

    @Field(() => SubtopicOrderByWithRelationInput, {nullable:true})
    Subtopic?: SubtopicOrderByWithRelationInput;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    File?: FileOrderByWithRelationInput;

    @Field(() => ScoreOrderByRelationAggregateInput, {nullable:true})
    Scores?: ScoreOrderByRelationAggregateInput;
}
