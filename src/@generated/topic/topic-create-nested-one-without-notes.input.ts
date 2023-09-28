import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateWithoutNotesInput } from './topic-create-without-notes.input';
import { Type } from 'class-transformer';
import { TopicCreateOrConnectWithoutNotesInput } from './topic-create-or-connect-without-notes.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';

@InputType()
export class TopicCreateNestedOneWithoutNotesInput {

    @Field(() => TopicCreateWithoutNotesInput, {nullable:true})
    @Type(() => TopicCreateWithoutNotesInput)
    create?: TopicCreateWithoutNotesInput;

    @Field(() => TopicCreateOrConnectWithoutNotesInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutNotesInput)
    connectOrCreate?: TopicCreateOrConnectWithoutNotesInput;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: TopicWhereUniqueInput;
}
