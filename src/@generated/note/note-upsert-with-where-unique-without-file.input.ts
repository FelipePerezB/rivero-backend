import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteUpdateWithoutFileInput } from './note-update-without-file.input';
import { NoteCreateWithoutFileInput } from './note-create-without-file.input';

@InputType()
export class NoteUpsertWithWhereUniqueWithoutFileInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteUpdateWithoutFileInput, {nullable:false})
    @Type(() => NoteUpdateWithoutFileInput)
    update!: NoteUpdateWithoutFileInput;

    @Field(() => NoteCreateWithoutFileInput, {nullable:false})
    @Type(() => NoteCreateWithoutFileInput)
    create!: NoteCreateWithoutFileInput;
}
