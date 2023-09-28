import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateOneWithoutNotesNestedInput } from '../subject/subject-update-one-without-notes-nested.input';
import { TopicUpdateOneWithoutNotesNestedInput } from '../topic/topic-update-one-without-notes-nested.input';
import { SubtopicUpdateOneRequiredWithoutNotesNestedInput } from '../subtopic/subtopic-update-one-required-without-notes-nested.input';
import { ScoreUpdateManyWithoutNoteNestedInput } from '../score/score-update-many-without-note-nested.input';

@InputType()
export class NoteUpdateWithoutFileInput {

    @Field(() => SubjectUpdateOneWithoutNotesNestedInput, {nullable:true})
    Subject?: SubjectUpdateOneWithoutNotesNestedInput;

    @Field(() => TopicUpdateOneWithoutNotesNestedInput, {nullable:true})
    Topic?: TopicUpdateOneWithoutNotesNestedInput;

    @Field(() => SubtopicUpdateOneRequiredWithoutNotesNestedInput, {nullable:true})
    Subtopic?: SubtopicUpdateOneRequiredWithoutNotesNestedInput;

    @Field(() => ScoreUpdateManyWithoutNoteNestedInput, {nullable:true})
    Scores?: ScoreUpdateManyWithoutNoteNestedInput;
}
