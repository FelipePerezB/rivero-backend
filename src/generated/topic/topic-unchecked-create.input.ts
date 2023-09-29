import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubtopicUncheckedCreateNestedManyWithoutTopicInput } from '../subtopic/subtopic-unchecked-create-nested-many-without-topic.input';
import { NoteUncheckedCreateNestedManyWithoutTopicInput } from '../note/note-unchecked-create-nested-many-without-topic.input';

@InputType()
export class TopicUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubtopicUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    Subtopics?: SubtopicUncheckedCreateNestedManyWithoutTopicInput;

    @Field(() => NoteUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    Notes?: NoteUncheckedCreateNestedManyWithoutTopicInput;
}
