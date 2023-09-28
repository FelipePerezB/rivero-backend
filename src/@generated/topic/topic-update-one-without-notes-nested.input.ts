import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutNotesInput } from './topic-create-without-notes.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutNotesInput } from './topic-create-or-connect-without-notes.input';
import { TopicUpsertWithoutNotesInput } from './topic-upsert-without-notes.input';
import { TopicWhereInput } from './topic-where.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { TopicUpdateToOneWithWhereWithoutNotesInput } from './topic-update-to-one-with-where-without-notes.input';

@InputType()
export class TopicUpdateOneWithoutNotesNestedInput {

    @Field(() => TopicCreateWithoutNotesInput, {nullable:true})
    @Type(() => TopicCreateWithoutNotesInput)
    create?: TopicCreateWithoutNotesInput;

    @Field(() => TopicCreateOrConnectWithoutNotesInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutNotesInput)
    connectOrCreate?: TopicCreateOrConnectWithoutNotesInput;

    @Field(() => TopicUpsertWithoutNotesInput, {nullable:true})
    @Type(() => TopicUpsertWithoutNotesInput)
    upsert?: TopicUpsertWithoutNotesInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    disconnect?: TopicWhereInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    delete?: TopicWhereInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;

    @Field(() => TopicUpdateToOneWithWhereWithoutNotesInput, {nullable:true})
    @Type(() => TopicUpdateToOneWithWhereWithoutNotesInput)
    update?: TopicUpdateToOneWithWhereWithoutNotesInput;
}
