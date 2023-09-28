import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutNotesInput } from '../subject/subject-create-nested-one-without-notes.input';
import { TopicCreateNestedOneWithoutNotesInput } from '../topic/topic-create-nested-one-without-notes.input';
import { FileCreateNestedOneWithoutNoteInput } from '../file/file-create-nested-one-without-note.input';
import { ScoreCreateNestedManyWithoutNoteInput } from '../score/score-create-nested-many-without-note.input';

@InputType()
export class NoteCreateWithoutSubtopicInput {

    @Field(() => SubjectCreateNestedOneWithoutNotesInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutNotesInput;

    @Field(() => TopicCreateNestedOneWithoutNotesInput, {nullable:true})
    Topic?: TopicCreateNestedOneWithoutNotesInput;

    @Field(() => FileCreateNestedOneWithoutNoteInput, {nullable:false})
    File!: FileCreateNestedOneWithoutNoteInput;

    @Field(() => ScoreCreateNestedManyWithoutNoteInput, {nullable:true})
    Scores?: ScoreCreateNestedManyWithoutNoteInput;
}
