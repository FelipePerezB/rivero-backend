import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutNoteInput } from './file-create-without-note.input';

@InputType()
export class FileCreateOrConnectWithoutNoteInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutNoteInput, {nullable:false})
    @Type(() => FileCreateWithoutNoteInput)
    create!: FileCreateWithoutNoteInput;
}
