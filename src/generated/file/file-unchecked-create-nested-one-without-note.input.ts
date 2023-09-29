import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutNoteInput } from './file-create-without-note.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutNoteInput } from './file-create-or-connect-without-note.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedOneWithoutNoteInput {

    @Field(() => FileCreateWithoutNoteInput, {nullable:true})
    @Type(() => FileCreateWithoutNoteInput)
    create?: FileCreateWithoutNoteInput;

    @Field(() => FileCreateOrConnectWithoutNoteInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutNoteInput)
    connectOrCreate?: FileCreateOrConnectWithoutNoteInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: FileWhereUniqueInput;
}
