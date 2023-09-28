import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateNestedManyWithoutSubjectInput } from '../topic/topic-create-nested-many-without-subject.input';
import { SubtopicCreateNestedManyWithoutSubjectInput } from '../subtopic/subtopic-create-nested-many-without-subject.input';
import { NoteCreateNestedManyWithoutSubjectInput } from '../note/note-create-nested-many-without-subject.input';

@InputType()
export class SubjectCreateInput {

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

    @Field(() => SubtopicCreateNestedManyWithoutSubjectInput, {nullable:true})
    Subtopic?: SubtopicCreateNestedManyWithoutSubjectInput;

    @Field(() => NoteCreateNestedManyWithoutSubjectInput, {nullable:true})
    Notes?: NoteCreateNestedManyWithoutSubjectInput;
}
