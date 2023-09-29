import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';

@InputType()
export class TopicListRelationFilter {

    @Field(() => TopicWhereInput, {nullable:true})
    every?: TopicWhereInput;

    @Field(() => TopicWhereInput, {nullable:true})
    some?: TopicWhereInput;

    @Field(() => TopicWhereInput, {nullable:true})
    none?: TopicWhereInput;
}
