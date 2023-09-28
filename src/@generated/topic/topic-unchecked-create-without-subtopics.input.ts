import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NoteUncheckedCreateNestedManyWithoutTopicInput } from '../note/note-unchecked-create-nested-many-without-topic.input';

@InputType()
export class TopicUncheckedCreateWithoutSubtopicsInput {

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

    @Field(() => NoteUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    Notes?: NoteUncheckedCreateNestedManyWithoutTopicInput;
}
