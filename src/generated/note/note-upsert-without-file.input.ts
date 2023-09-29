import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteUpdateWithoutFileInput } from './note-update-without-file.input';
import { Type } from 'class-transformer';
import { NoteCreateWithoutFileInput } from './note-create-without-file.input';
import { NoteWhereInput } from './note-where.input';

@InputType()
export class NoteUpsertWithoutFileInput {

    @Field(() => NoteUpdateWithoutFileInput, {nullable:false})
    @Type(() => NoteUpdateWithoutFileInput)
    update!: NoteUpdateWithoutFileInput;

    @Field(() => NoteCreateWithoutFileInput, {nullable:false})
    @Type(() => NoteCreateWithoutFileInput)
    create!: NoteCreateWithoutFileInput;

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    where?: NoteWhereInput;
}
