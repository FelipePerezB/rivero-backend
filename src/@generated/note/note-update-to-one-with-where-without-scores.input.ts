import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereInput } from './note-where.input';
import { Type } from 'class-transformer';
import { NoteUpdateWithoutScoresInput } from './note-update-without-scores.input';

@InputType()
export class NoteUpdateToOneWithWhereWithoutScoresInput {

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    where?: NoteWhereInput;

    @Field(() => NoteUpdateWithoutScoresInput, {nullable:false})
    @Type(() => NoteUpdateWithoutScoresInput)
    data!: NoteUpdateWithoutScoresInput;
}
