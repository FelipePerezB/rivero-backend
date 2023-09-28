import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateNestedOneWithoutNotesInput } from '../topic/topic-create-nested-one-without-notes.input';
import { SubtopicCreateNestedOneWithoutNotesInput } from '../subtopic/subtopic-create-nested-one-without-notes.input';
import { FileCreateNestedOneWithoutNoteInput } from '../file/file-create-nested-one-without-note.input';
import { ScoreCreateNestedManyWithoutNoteInput } from '../score/score-create-nested-many-without-note.input';

@InputType()
export class NoteCreateWithoutSubjectInput {

    @Field(() => TopicCreateNestedOneWithoutNotesInput, {nullable:true})
    Topic?: TopicCreateNestedOneWithoutNotesInput;

    @Field(() => SubtopicCreateNestedOneWithoutNotesInput, {nullable:false})
    Subtopic!: SubtopicCreateNestedOneWithoutNotesInput;

    @Field(() => FileCreateNestedOneWithoutNoteInput, {nullable:false})
    File!: FileCreateNestedOneWithoutNoteInput;

    @Field(() => ScoreCreateNestedManyWithoutNoteInput, {nullable:true})
    Scores?: ScoreCreateNestedManyWithoutNoteInput;
}
