import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateWithoutDocInput } from './topic-update-without-doc.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutDocInput } from './topic-create-without-doc.input';
import { TopicWhereInput } from './topic-where.input';

@InputType()
export class TopicUpsertWithoutDocInput {

    @Field(() => TopicUpdateWithoutDocInput, {nullable:false})
    @Type(() => TopicUpdateWithoutDocInput)
    update!: TopicUpdateWithoutDocInput;

    @Field(() => TopicCreateWithoutDocInput, {nullable:false})
    @Type(() => TopicCreateWithoutDocInput)
    create!: TopicCreateWithoutDocInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;
}
