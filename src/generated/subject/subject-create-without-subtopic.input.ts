import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateNestedManyWithoutSubjectInput } from '../topic/topic-create-nested-many-without-subject.input';
import { NoteCreateNestedManyWithoutSubjectInput } from '../note/note-create-nested-many-without-subject.input';

@InputType()
export class SubjectCreateWithoutSubtopicInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => TopicCreateNestedManyWithoutSubjectInput, {nullable:true})
    Topics?: TopicCreateNestedManyWithoutSubjectInput;

    @Field(() => NoteCreateNestedManyWithoutSubjectInput, {nullable:true})
    Notes?: NoteCreateNestedManyWithoutSubjectInput;
}
