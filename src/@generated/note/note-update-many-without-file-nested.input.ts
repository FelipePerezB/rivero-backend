import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutFileInput } from './note-create-without-file.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutFileInput } from './note-create-or-connect-without-file.input';
import { NoteUpsertWithWhereUniqueWithoutFileInput } from './note-upsert-with-where-unique-without-file.input';
import { NoteCreateManyFileInputEnvelope } from './note-create-many-file-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { NoteUpdateWithWhereUniqueWithoutFileInput } from './note-update-with-where-unique-without-file.input';
import { NoteUpdateManyWithWhereWithoutFileInput } from './note-update-many-with-where-without-file.input';
import { NoteScalarWhereInput } from './note-scalar-where.input';

@InputType()
export class NoteUpdateManyWithoutFileNestedInput {

    @Field(() => [NoteCreateWithoutFileInput], {nullable:true})
    @Type(() => NoteCreateWithoutFileInput)
    create?: Array<NoteCreateWithoutFileInput>;

    @Field(() => [NoteCreateOrConnectWithoutFileInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutFileInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutFileInput>;

    @Field(() => [NoteUpsertWithWhereUniqueWithoutFileInput], {nullable:true})
    @Type(() => NoteUpsertWithWhereUniqueWithoutFileInput)
    upsert?: Array<NoteUpsertWithWhereUniqueWithoutFileInput>;

    @Field(() => NoteCreateManyFileInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManyFileInputEnvelope)
    createMany?: NoteCreateManyFileInputEnvelope;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    set?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    disconnect?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    delete?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: Array<NoteWhereUniqueInput>;

    @Field(() => [NoteUpdateWithWhereUniqueWithoutFileInput], {nullable:true})
    @Type(() => NoteUpdateWithWhereUniqueWithoutFileInput)
    update?: Array<NoteUpdateWithWhereUniqueWithoutFileInput>;

    @Field(() => [NoteUpdateManyWithWhereWithoutFileInput], {nullable:true})
    @Type(() => NoteUpdateManyWithWhereWithoutFileInput)
    updateMany?: Array<NoteUpdateManyWithWhereWithoutFileInput>;

    @Field(() => [NoteScalarWhereInput], {nullable:true})
    @Type(() => NoteScalarWhereInput)
    deleteMany?: Array<NoteScalarWhereInput>;
}
