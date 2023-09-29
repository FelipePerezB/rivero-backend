import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteCreateWithoutTopicInput } from './note-create-without-topic.input';

@InputType()
export class NoteCreateOrConnectWithoutTopicInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteCreateWithoutTopicInput, {nullable:false})
    @Type(() => NoteCreateWithoutTopicInput)
    create!: NoteCreateWithoutTopicInput;
}
