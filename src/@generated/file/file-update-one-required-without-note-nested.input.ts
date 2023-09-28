import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutNoteInput } from './file-create-without-note.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutNoteInput } from './file-create-or-connect-without-note.input';
import { FileUpsertWithoutNoteInput } from './file-upsert-without-note.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateToOneWithWhereWithoutNoteInput } from './file-update-to-one-with-where-without-note.input';

@InputType()
export class FileUpdateOneRequiredWithoutNoteNestedInput {

    @Field(() => FileCreateWithoutNoteInput, {nullable:true})
    @Type(() => FileCreateWithoutNoteInput)
    create?: FileCreateWithoutNoteInput;

    @Field(() => FileCreateOrConnectWithoutNoteInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutNoteInput)
    connectOrCreate?: FileCreateOrConnectWithoutNoteInput;

    @Field(() => FileUpsertWithoutNoteInput, {nullable:true})
    @Type(() => FileUpsertWithoutNoteInput)
    upsert?: FileUpsertWithoutNoteInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateToOneWithWhereWithoutNoteInput, {nullable:true})
    @Type(() => FileUpdateToOneWithWhereWithoutNoteInput)
    update?: FileUpdateToOneWithWhereWithoutNoteInput;
}
