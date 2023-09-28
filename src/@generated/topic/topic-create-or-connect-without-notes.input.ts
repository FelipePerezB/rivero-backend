import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutNotesInput } from './topic-create-without-notes.input';

@InputType()
export class TopicCreateOrConnectWithoutNotesInput {

    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: TopicWhereUniqueInput;

    @Field(() => TopicCreateWithoutNotesInput, {nullable:false})
    @Type(() => TopicCreateWithoutNotesInput)
    create!: TopicCreateWithoutNotesInput;
}
