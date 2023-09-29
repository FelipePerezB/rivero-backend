import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutFileInput } from './note-create-without-file.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutFileInput } from './note-create-or-connect-without-file.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';

@InputType()
export class NoteCreateNestedOneWithoutFileInput {

    @Field(() => NoteCreateWithoutFileInput, {nullable:true})
    @Type(() => NoteCreateWithoutFileInput)
    create?: NoteCreateWithoutFileInput;

    @Field(() => NoteCreateOrConnectWithoutFileInput, {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutFileInput)
    connectOrCreate?: NoteCreateOrConnectWithoutFileInput;

    @Field(() => NoteWhereUniqueInput, {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: NoteWhereUniqueInput;
}
