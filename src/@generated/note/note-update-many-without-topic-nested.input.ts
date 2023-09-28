import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutTopicInput } from './note-create-without-topic.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutTopicInput } from './note-create-or-connect-without-topic.input';
import { NoteUpsertWithWhereUniqueWithoutTopicInput } from './note-upsert-with-where-unique-without-topic.input';
import { NoteCreateManyTopicInputEnvelope } from './note-create-many-topic-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { NoteUpdateWithWhereUniqueWithoutTopicInput } from './note-update-with-where-unique-without-topic.input';
import { NoteUpdateManyWithWhereWithoutTopicInput } from './note-update-many-with-where-without-topic.input';
import { NoteScalarWhereInput } from './note-scalar-where.input';

@InputType()
export class NoteUpdateManyWithoutTopicNestedInput {

    @Field(() => [NoteCreateWithoutTopicInput], {nullable:true})
    @Type(() => NoteCreateWithoutTopicInput)
    create?: Array<NoteCreateWithoutTopicInput>;

    @Field(() => [NoteCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutTopicInput>;

    @Field(() => [NoteUpsertWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => NoteUpsertWithWhereUniqueWithoutTopicInput)
    upsert?: Array<NoteUpsertWithWhereUniqueWithoutTopicInput>;

    @Field(() => NoteCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManyTopicInputEnvelope)
    createMany?: NoteCreateManyTopicInputEnvelope;

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

    @Field(() => [NoteUpdateWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => NoteUpdateWithWhereUniqueWithoutTopicInput)
    update?: Array<NoteUpdateWithWhereUniqueWithoutTopicInput>;

    @Field(() => [NoteUpdateManyWithWhereWithoutTopicInput], {nullable:true})
    @Type(() => NoteUpdateManyWithWhereWithoutTopicInput)
    updateMany?: Array<NoteUpdateManyWithWhereWithoutTopicInput>;

    @Field(() => [NoteScalarWhereInput], {nullable:true})
    @Type(() => NoteScalarWhereInput)
    deleteMany?: Array<NoteScalarWhereInput>;
}
