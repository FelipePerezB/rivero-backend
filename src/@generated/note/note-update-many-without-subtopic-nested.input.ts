import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutSubtopicInput } from './note-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutSubtopicInput } from './note-create-or-connect-without-subtopic.input';
import { NoteUpsertWithWhereUniqueWithoutSubtopicInput } from './note-upsert-with-where-unique-without-subtopic.input';
import { NoteCreateManySubtopicInputEnvelope } from './note-create-many-subtopic-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { NoteUpdateWithWhereUniqueWithoutSubtopicInput } from './note-update-with-where-unique-without-subtopic.input';
import { NoteUpdateManyWithWhereWithoutSubtopicInput } from './note-update-many-with-where-without-subtopic.input';
import { NoteScalarWhereInput } from './note-scalar-where.input';

@InputType()
export class NoteUpdateManyWithoutSubtopicNestedInput {

    @Field(() => [NoteCreateWithoutSubtopicInput], {nullable:true})
    @Type(() => NoteCreateWithoutSubtopicInput)
    create?: Array<NoteCreateWithoutSubtopicInput>;

    @Field(() => [NoteCreateOrConnectWithoutSubtopicInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutSubtopicInput>;

    @Field(() => [NoteUpsertWithWhereUniqueWithoutSubtopicInput], {nullable:true})
    @Type(() => NoteUpsertWithWhereUniqueWithoutSubtopicInput)
    upsert?: Array<NoteUpsertWithWhereUniqueWithoutSubtopicInput>;

    @Field(() => NoteCreateManySubtopicInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManySubtopicInputEnvelope)
    createMany?: NoteCreateManySubtopicInputEnvelope;

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

    @Field(() => [NoteUpdateWithWhereUniqueWithoutSubtopicInput], {nullable:true})
    @Type(() => NoteUpdateWithWhereUniqueWithoutSubtopicInput)
    update?: Array<NoteUpdateWithWhereUniqueWithoutSubtopicInput>;

    @Field(() => [NoteUpdateManyWithWhereWithoutSubtopicInput], {nullable:true})
    @Type(() => NoteUpdateManyWithWhereWithoutSubtopicInput)
    updateMany?: Array<NoteUpdateManyWithWhereWithoutSubtopicInput>;

    @Field(() => [NoteScalarWhereInput], {nullable:true})
    @Type(() => NoteScalarWhereInput)
    deleteMany?: Array<NoteScalarWhereInput>;
}
