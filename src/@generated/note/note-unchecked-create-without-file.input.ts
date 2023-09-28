import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScoreUncheckedCreateNestedManyWithoutNoteInput } from '../score/score-unchecked-create-nested-many-without-note.input';

@InputType()
export class NoteUncheckedCreateWithoutFileInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:true})
    topicId?: number;

    @Field(() => Int, {nullable:false})
    subtopicId!: number;

    @Field(() => ScoreUncheckedCreateNestedManyWithoutNoteInput, {nullable:true})
    Scores?: ScoreUncheckedCreateNestedManyWithoutNoteInput;
}
