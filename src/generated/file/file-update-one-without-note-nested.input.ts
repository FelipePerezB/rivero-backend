import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutNoteInput } from './file-create-without-note.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutNoteInput } from './file-create-or-connect-without-note.input';
import { FileUpsertWithoutNoteInput } from './file-upsert-without-note.input';
import { FileWhereInput } from './file-where.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateToOneWithWhereWithoutNoteInput } from './file-update-to-one-with-where-without-note.input';

@InputType()
export class FileUpdateOneWithoutNoteNestedInput {

    @Field(() => FileCreateWithoutNoteInput, {nullable:true})
    @Type(() => FileCreateWithoutNoteInput)
    create?: FileCreateWithoutNoteInput;

    @Field(() => FileCreateOrConnectWithoutNoteInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutNoteInput)
    connectOrCreate?: FileCreateOrConnectWithoutNoteInput;

    @Field(() => FileUpsertWithoutNoteInput, {nullable:true})
    @Type(() => FileUpsertWithoutNoteInput)
    upsert?: FileUpsertWithoutNoteInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    disconnect?: FileWhereInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    delete?: FileWhereInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: FileWhereUniqueInput;

    @Field(() => FileUpdateToOneWithWhereWithoutNoteInput, {nullable:true})
    @Type(() => FileUpdateToOneWithWhereWithoutNoteInput)
    update?: FileUpdateToOneWithWhereWithoutNoteInput;
}
