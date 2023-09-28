import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteCreateWithoutFileInput } from './note-create-without-file.input';

@InputType()
export class NoteCreateOrConnectWithoutFileInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteCreateWithoutFileInput, {nullable:false})
    @Type(() => NoteCreateWithoutFileInput)
    create!: NoteCreateWithoutFileInput;
}
