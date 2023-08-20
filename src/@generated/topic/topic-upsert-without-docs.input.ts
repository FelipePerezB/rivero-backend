import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicUpdateWithoutDocsInput } from './topic-update-without-docs.input';
import { Type } from 'class-transformer';
import { TopicCreateWithoutDocsInput } from './topic-create-without-docs.input';
import { TopicWhereInput } from './topic-where.input';

@InputType()
export class TopicUpsertWithoutDocsInput {

    @Field(() => TopicUpdateWithoutDocsInput, {nullable:false})
    @Type(() => TopicUpdateWithoutDocsInput)
    update!: TopicUpdateWithoutDocsInput;

    @Field(() => TopicCreateWithoutDocsInput, {nullable:false})
    @Type(() => TopicCreateWithoutDocsInput)
    create!: TopicCreateWithoutDocsInput;

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;
}
