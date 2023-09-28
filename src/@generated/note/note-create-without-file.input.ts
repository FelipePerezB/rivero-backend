import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateNestedOneWithoutNotesInput } from '../subject/subject-create-nested-one-without-notes.input';
import { TopicCreateNestedOneWithoutNotesInput } from '../topic/topic-create-nested-one-without-notes.input';
import { SubtopicCreateNestedOneWithoutNotesInput } from '../subtopic/subtopic-create-nested-one-without-notes.input';
import { ScoreCreateNestedManyWithoutNoteInput } from '../score/score-create-nested-many-without-note.input';

@InputType()
export class NoteCreateWithoutFileInput {

    @Field(() => SubjectCreateNestedOneWithoutNotesInput, {nullable:true})
    Subject?: SubjectCreateNestedOneWithoutNotesInput;

    @Field(() => TopicCreateNestedOneWithoutNotesInput, {nullable:true})
    Topic?: TopicCreateNestedOneWithoutNotesInput;

    @Field(() => SubtopicCreateNestedOneWithoutNotesInput, {nullable:false})
    Subtopic!: SubtopicCreateNestedOneWithoutNotesInput;

    @Field(() => ScoreCreateNestedManyWithoutNoteInput, {nullable:true})
    Scores?: ScoreCreateNestedManyWithoutNoteInput;
}
