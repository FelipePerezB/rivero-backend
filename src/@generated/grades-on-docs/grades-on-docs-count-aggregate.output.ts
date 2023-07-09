import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GradesOnDocsCountAggregate {

    @Field(() => Int, {nullable:false})
    docId!: number;

    @Field(() => Int, {nullable:false})
    gradeId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updateAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}