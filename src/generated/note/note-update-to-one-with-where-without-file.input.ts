import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereInput } from './note-where.input';
import { Type } from 'class-transformer';
import { NoteUpdateWithoutFileInput } from './note-update-without-file.input';

@InputType()
export class NoteUpdateToOneWithWhereWithoutFileInput {

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    where?: NoteWhereInput;

    @Field(() => NoteUpdateWithoutFileInput, {nullable:false})
    @Type(() => NoteUpdateWithoutFileInput)
    data!: NoteUpdateWithoutFileInput;
}
