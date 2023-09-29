import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NoteWhereUniqueInput } from './note-where-unique.input';
import { Type } from 'class-transformer';
import { NoteUpdateWithoutTopicInput } from './note-update-without-topic.input';
import { NoteCreateWithoutTopicInput } from './note-create-without-topic.input';

@InputType()
export class NoteUpsertWithWhereUniqueWithoutTopicInput {

    @Field(() => NoteWhereUniqueInput, {nullable:false})
    @Type(() => NoteWhereUniqueInput)
    where!: NoteWhereUniqueInput;

    @Field(() => NoteUpdateWithoutTopicInput, {nullable:false})
    @Type(() => NoteUpdateWithoutTopicInput)
    update!: NoteUpdateWithoutTopicInput;

    @Field(() => NoteCreateWithoutTopicInput, {nullable:false})
    @Type(() => NoteCreateWithoutTopicInput)
    create!: NoteCreateWithoutTopicInput;
}
