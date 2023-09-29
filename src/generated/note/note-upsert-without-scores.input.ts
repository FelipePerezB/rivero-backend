import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteUpdateWithoutScoresInput } from './note-update-without-scores.input';
import { Type } from 'class-transformer';
import { NoteCreateWithoutScoresInput } from './note-create-without-scores.input';
import { NoteWhereInput } from './note-where.input';

@InputType()
export class NoteUpsertWithoutScoresInput {

    @Field(() => NoteUpdateWithoutScoresInput, {nullable:false})
    @Type(() => NoteUpdateWithoutScoresInput)
    update!: NoteUpdateWithoutScoresInput;

    @Field(() => NoteCreateWithoutScoresInput, {nullable:false})
    @Type(() => NoteCreateWithoutScoresInput)
    create!: NoteCreateWithoutScoresInput;

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    where?: NoteWhereInput;
}
