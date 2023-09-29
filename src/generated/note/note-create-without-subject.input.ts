import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Types } from '../prisma/types.enum';
import { TopicCreateNestedOneWithoutNotesInput } from '../topic/topic-create-nested-one-without-notes.input';
import { SubtopicCreateNestedOneWithoutNotesInput } from '../subtopic/subtopic-create-nested-one-without-notes.input';
import { FileCreateNestedOneWithoutNoteInput } from '../file/file-create-nested-one-without-note.input';
import { ScoreCreateNestedManyWithoutNoteInput } from '../score/score-create-nested-many-without-note.input';

@InputType()
export class NoteCreateWithoutSubjectInput {

    @Field(() => Int, {nullable:true})
    fileId?: number;

    @Field(() => Types, {nullable:false})
    type!: keyof typeof Types;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => TopicCreateNestedOneWithoutNotesInput, {nullable:true})
    Topic?: TopicCreateNestedOneWithoutNotesInput;

    @Field(() => SubtopicCreateNestedOneWithoutNotesInput, {nullable:true})
    Subtopic?: SubtopicCreateNestedOneWithoutNotesInput;

    @Field(() => FileCreateNestedOneWithoutNoteInput, {nullable:true})
    File?: FileCreateNestedOneWithoutNoteInput;

    @Field(() => ScoreCreateNestedManyWithoutNoteInput, {nullable:true})
    Scores?: ScoreCreateNestedManyWithoutNoteInput;
}
