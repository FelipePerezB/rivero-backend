import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Types } from '../prisma/types.enum';
import { FileUncheckedCreateNestedOneWithoutNoteInput } from '../file/file-unchecked-create-nested-one-without-note.input';
import { ScoreUncheckedCreateNestedManyWithoutNoteInput } from '../score/score-unchecked-create-nested-many-without-note.input';

@InputType()
export class NoteUncheckedCreateWithoutTopicInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    subjectId?: number;

    @Field(() => Int, {nullable:false})
    subtopicId!: number;

    @Field(() => Int, {nullable:true})
    fileId?: number;

    @Field(() => Types, {nullable:false})
    type!: keyof typeof Types;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => FileUncheckedCreateNestedOneWithoutNoteInput, {nullable:true})
    File?: FileUncheckedCreateNestedOneWithoutNoteInput;

    @Field(() => ScoreUncheckedCreateNestedManyWithoutNoteInput, {nullable:true})
    Scores?: ScoreUncheckedCreateNestedManyWithoutNoteInput;
}
