import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutSubtopicInput } from '../subject/subject-create-nested-one-without-subtopic.input';
import { NoteCreateNestedManyWithoutSubtopicInput } from '../note/note-create-nested-many-without-subtopic.input';

@InputType()
export class SubtopicCreateWithoutTopicInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutSubtopicInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutSubtopicInput;

    @Field(() => NoteCreateNestedManyWithoutSubtopicInput, {nullable:true})
    Notes?: NoteCreateNestedManyWithoutSubtopicInput;
}
