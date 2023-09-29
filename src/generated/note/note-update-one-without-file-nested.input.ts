import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutFileInput } from './note-create-without-file.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutFileInput } from './note-create-or-connect-without-file.input';
import { NoteUpsertWithoutFileInput } from './note-upsert-without-file.input';
import { NoteWhereInput } from './note-where.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { NoteUpdateToOneWithWhereWithoutFileInput } from './note-update-to-one-with-where-without-file.input';

@InputType()
export class NoteUpdateOneWithoutFileNestedInput {

    @Field(() => NoteCreateWithoutFileInput, {nullable:true})
    @Type(() => NoteCreateWithoutFileInput)
    create?: NoteCreateWithoutFileInput;

    @Field(() => NoteCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutFileInput)
    connectOrCreate?: NoteCreateOrConnectWithoutFileInput;

    @Field(() => NoteUpsertWithoutFileInput, {nullable:true})
    @Type(() => NoteUpsertWithoutFileInput)
    upsert?: NoteUpsertWithoutFileInput;

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    disconnect?: NoteWhereInput;

    @Field(() => NoteWhereInput, {nullable:true})
    @Type(() => NoteWhereInput)
    delete?: NoteWhereInput;

    @Field(() => NoteWhereUniqueInput, {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: NoteWhereUniqueInput;

    @Field(() => NoteUpdateToOneWithWhereWithoutFileInput, {nullable:true})
    @Type(() => NoteUpdateToOneWithWhereWithoutFileInput)
    update?: NoteUpdateToOneWithWhereWithoutFileInput;
}
