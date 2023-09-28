import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutFileInput } from './note-create-without-file.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutFileInput } from './note-create-or-connect-without-file.input';
import { NoteCreateManyFileInputEnvelope } from './note-create-many-file-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';

@InputType()
export class NoteUncheckedCreateNestedManyWithoutFileInput {

    @Field(() => [NoteCreateWithoutFileInput], {nullable:true})
    @Type(() => NoteCreateWithoutFileInput)
    create?: Array<NoteCreateWithoutFileInput>;

    @Field(() => [NoteCreateOrConnectWithoutFileInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutFileInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutFileInput>;

    @Field(() => NoteCreateManyFileInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManyFileInputEnvelope)
    createMany?: NoteCreateManyFileInputEnvelope;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: Array<NoteWhereUniqueInput>;
}
