import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TopicUncheckedCreateNestedManyWithoutSubjectInput } from '../topic/topic-unchecked-create-nested-many-without-subject.input';
import { SubtopicUncheckedCreateNestedManyWithoutSubjectInput } from '../subtopic/subtopic-unchecked-create-nested-many-without-subject.input';
import { NoteUncheckedCreateNestedManyWithoutSubjectInput } from '../note/note-unchecked-create-nested-many-without-subject.input';

@InputType()
export class SubjectUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => TopicUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    Topics?: TopicUncheckedCreateNestedManyWithoutSubjectInput;

    @Field(() => SubtopicUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    Subtopic?: SubtopicUncheckedCreateNestedManyWithoutSubjectInput;

    @Field(() => NoteUncheckedCreateNestedManyWithoutSubjectInput, {nullable:true})
    Notes?: NoteUncheckedCreateNestedManyWithoutSubjectInput;
}
