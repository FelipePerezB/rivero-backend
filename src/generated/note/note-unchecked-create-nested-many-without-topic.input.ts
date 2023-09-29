import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteCreateWithoutTopicInput } from './note-create-without-topic.input';
import { Type } from 'class-transformer';
import { NoteCreateOrConnectWithoutTopicInput } from './note-create-or-connect-without-topic.input';
import { NoteCreateManyTopicInputEnvelope } from './note-create-many-topic-input-envelope.input';
import { NoteWhereUniqueInput } from './note-where-unique.input';

@InputType()
export class NoteUncheckedCreateNestedManyWithoutTopicInput {

    @Field(() => [NoteCreateWithoutTopicInput], {nullable:true})
    @Type(() => NoteCreateWithoutTopicInput)
    create?: Array<NoteCreateWithoutTopicInput>;

    @Field(() => [NoteCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => NoteCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<NoteCreateOrConnectWithoutTopicInput>;

    @Field(() => NoteCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => NoteCreateManyTopicInputEnvelope)
    createMany?: NoteCreateManyTopicInputEnvelope;

    @Field(() => [NoteWhereUniqueInput], {nullable:true})
    @Type(() => NoteWhereUniqueInput)
    connect?: Array<NoteWhereUniqueInput>;
}
