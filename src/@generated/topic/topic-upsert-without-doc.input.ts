import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateWithoutDocInput } from './topic-update-without-doc.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutDocInput } from './topic-create-without-doc.input';

@InputType()
export class TopicUpsertWithoutDocInput {

    @Field(() => TopicUpdateWithoutDocInput, {nullable:false})
    @Type(() => TopicUpdateWithoutDocInput)
    update!: TopicUpdateWithoutDocInput;

    @Field(() => TopicCreateWithoutDocInput, {nullable:false})
    @Type(() => TopicCreateWithoutDocInput)
    create!: TopicCreateWithoutDocInput;
}
