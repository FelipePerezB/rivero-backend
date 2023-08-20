import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { Type } from 'class-transformer';
import { TopicUpdateWithoutDocInput } from './topic-update-without-doc.input';

@InputType()
export class TopicUpdateToOneWithWhereWithoutDocInput {

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;

    @Field(() => TopicUpdateWithoutDocInput, {nullable:false})
    @Type(() => TopicUpdateWithoutDocInput)
    data!: TopicUpdateWithoutDocInput;
}
