import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubtopicCount {

    @Field(() => Int, {nullable:false})
    Notes?: number;
}
