import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileUpdateWithoutNoteInput } from './file-update-without-note.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutNoteInput } from './file-create-without-note.input';
import { FileWhereInput } from './file-where.input';

@InputType()
export class FileUpsertWithoutNoteInput {

    @Field(() => FileUpdateWithoutNoteInput, {nullable:false})
    @Type(() => FileUpdateWithoutNoteInput)
    update!: FileUpdateWithoutNoteInput;

    @Field(() => FileCreateWithoutNoteInput, {nullable:false})
    @Type(() => FileCreateWithoutNoteInput)
    create!: FileCreateWithoutNoteInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;
}
