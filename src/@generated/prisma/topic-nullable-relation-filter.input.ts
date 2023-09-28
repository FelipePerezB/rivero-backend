import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicWhereInput } from '../topic/topic-where.input';

@InputType()
export class TopicNullableRelationFilter {

    @Field(() => TopicWhereInput, {nullable:true})
    is?: TopicWhereInput;

    @Field(() => TopicWhereInput, {nullable:true})
    isNot?: TopicWhereInput;
}
