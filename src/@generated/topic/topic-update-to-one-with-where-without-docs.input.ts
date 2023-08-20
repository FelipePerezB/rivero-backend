import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { Type } from 'class-transformer';
import { TopicUpdateWithoutDocsInput } from './topic-update-without-docs.input';

@InputType()
export class TopicUpdateToOneWithWhereWithoutDocsInput {

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;

    @Field(() => TopicUpdateWithoutDocsInput, {nullable:false})
    @Type(() => TopicUpdateWithoutDocsInput)
    data!: TopicUpdateWithoutDocsInput;
}
