import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateWithoutNotesInput } from './topic-update-without-notes.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutNotesInput } from './topic-create-without-notes.input';
import { TopicWhereInput } from './topic-where.input';

@InputType()
export class TopicUpsertWithoutNotesInput {

    @Field(() => TopicUpdateWithoutNotesInput, {nullable:false})
    @Type(() => TopicUpdateWithoutNotesInput)
    update!: TopicUpdateWithoutNotesInput;

    @Field(() => TopicCreateWithoutNotesInput, {nullable:false})
    @Type(() => TopicCreateWithoutNotesInput)
    create!: TopicCreateWithoutNotesInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;
}
