import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutNotesInput } from '../subject/subject-create-nested-one-without-notes.input';
import { TopicCreateNestedOneWithoutNotesInput } from '../topic/topic-create-nested-one-without-notes.input';
import { SubtopicCreateNestedOneWithoutNotesInput } from '../subtopic/subtopic-create-nested-one-without-notes.input';
import { FileCreateNestedOneWithoutNoteInput } from '../file/file-create-nested-one-without-note.input';

@InputType()
export class NoteCreateWithoutScoresInput {

    @Field(() => SubjectCreateNestedOneWithoutNotesInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutNotesInput;

    @Field(() => TopicCreateNestedOneWithoutNotesInput, {nullable:true})
    Topic?: TopicCreateNestedOneWithoutNotesInput;

    @Field(() => SubtopicCreateNestedOneWithoutNotesInput, {nullable:false})
    Subtopic!: SubtopicCreateNestedOneWithoutNotesInput;

    @Field(() => FileCreateNestedOneWithoutNoteInput, {nullable:false})
    File!: FileCreateNestedOneWithoutNoteInput;
}
