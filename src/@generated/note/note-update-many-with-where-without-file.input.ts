import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteScalarWhereInput } from './note-scalar-where.input';
import { Type } from 'class-transformer';
import { NoteUncheckedUpdateManyWithoutFileInput } from './note-unchecked-update-many-without-file.input';

@InputType()
export class NoteUpdateManyWithWhereWithoutFileInput {

    @Field(() => NoteScalarWhereInput, {nullable:false})
    @Type(() => NoteScalarWhereInput)
    where!: NoteScalarWhereInput;

    @Field(() => NoteUncheckedUpdateManyWithoutFileInput, {nullable:false})
    @Type(() => NoteUncheckedUpdateManyWithoutFileInput)
    data!: NoteUncheckedUpdateManyWithoutFileInput;
}
