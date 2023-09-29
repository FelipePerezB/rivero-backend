import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicWhereInput } from './topic-where.input';
import { Type } from 'class-transformer';
import { TopicOrderByWithRelationInput } from './topic-order-by-with-relation.input';
import { TopicWhereUniqueInput } from './topic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TopicScalarFieldEnum } from './topic-scalar-field.enum';

@ArgsType()
export class FindFirstTopicOrThrowArgs {

    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: TopicWhereInput;

    @Field(() => [TopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TopicOrderByWithRelationInput>;

    @Field(() => TopicWhereUniqueInput, {nullable:true})
    cursor?: TopicWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TopicScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TopicScalarFieldEnum>;
}
