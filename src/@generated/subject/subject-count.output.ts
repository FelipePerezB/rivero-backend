import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SubjectCount {

    @Field(() => Int, {nullable:false})
    Topics?: number;

    @Field(() => Int, {nullable:false})
    Subtopic?: number;

    @Field(() => Int, {nullable:false})
    Docs?: number;
}
