import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateOneWithoutNotesNestedInput } from '../topic/topic-update-one-without-notes-nested.input';
import { SubtopicUpdateOneRequiredWithoutNotesNestedInput } from '../subtopic/subtopic-update-one-required-without-notes-nested.input';
import { FileUpdateOneRequiredWithoutNoteNestedInput } from '../file/file-update-one-required-without-note-nested.input';
import { ScoreUpdateManyWithoutNoteNestedInput } from '../score/score-update-many-without-note-nested.input';

@InputType()
export class NoteUpdateWithoutSubjectInput {

    @Field(() => TopicUpdateOneWithoutNotesNestedInput, {nullable:true})
    Topic?: TopicUpdateOneWithoutNotesNestedInput;

    @Field(() => SubtopicUpdateOneRequiredWithoutNotesNestedInput, {nullable:true})
    Subtopic?: SubtopicUpdateOneRequiredWithoutNotesNestedInput;

    @Field(() => FileUpdateOneRequiredWithoutNoteNestedInput, {nullable:true})
    File?: FileUpdateOneRequiredWithoutNoteNestedInput;

    @Field(() => ScoreUpdateManyWithoutNoteNestedInput, {nullable:true})
    Scores?: ScoreUpdateManyWithoutNoteNestedInput;
}
