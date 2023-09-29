import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutNoteInput } from './file-update-without-note.input';

@InputType()
export class FileUpdateToOneWithWhereWithoutNoteInput {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => FileUpdateWithoutNoteInput, {nullable:false})
    @Type(() => FileUpdateWithoutNoteInput)
    data!: FileUpdateWithoutNoteInput;
}
