import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateOneWithoutNotesNestedInput } from '../subject/subject-update-one-without-notes-nested.input';
import { TopicUpdateOneWithoutNotesNestedInput } from '../topic/topic-update-one-without-notes-nested.input';
import { FileUpdateOneRequiredWithoutNoteNestedInput } from '../file/file-update-one-required-without-note-nested.input';
import { ScoreUpdateManyWithoutNoteNestedInput } from '../score/score-update-many-without-note-nested.input';

@InputType()
export class NoteUpdateWithoutSubtopicInput {

    @Field(() => SubjectUpdateOneWithoutNotesNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneWithoutNotesNestedInput;

    @Field(() => TopicUpdateOneWithoutNotesNestedInput, {nullable:true})
    Topic?: TopicUpdateOneWithoutNotesNestedInput;

    @Field(() => FileUpdateOneRequiredWithoutNoteNestedInput, {nullable:true})
    File?: FileUpdateOneRequiredWithoutNoteNestedInput;

    @Field(() => ScoreUpdateManyWithoutNoteNestedInput, {nullable:true})
    Scores?: ScoreUpdateManyWithoutNoteNestedInput;
}
