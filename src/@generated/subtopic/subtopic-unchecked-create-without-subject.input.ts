import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NoteUncheckedCreateNestedManyWithoutSubtopicInput } from '../note/note-unchecked-create-nested-many-without-subtopic.input';

@InputType()
export class SubtopicUncheckedCreateWithoutSubjectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    topicId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => NoteUncheckedCreateNestedManyWithoutSubtopicInput, {nullable:true})
    Notes?: NoteUncheckedCreateNestedManyWithoutSubtopicInput;
}
