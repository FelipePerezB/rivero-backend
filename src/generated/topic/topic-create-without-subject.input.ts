import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateNestedManyWithoutTopicInput } from '../subtopic/subtopic-create-nested-many-without-topic.input';
import { NoteCreateNestedManyWithoutTopicInput } from '../note/note-create-nested-many-without-topic.input';

@InputType()
export class TopicCreateWithoutSubjectInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubtopicCreateNestedManyWithoutTopicInput, {nullable:true})
    Subtopics?: SubtopicCreateNestedManyWithoutTopicInput;

    @Field(() => NoteCreateNestedManyWithoutTopicInput, {nullable:true})
    Notes?: NoteCreateNestedManyWithoutTopicInput;
}
