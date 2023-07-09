import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { SubjectCreateNestedOneWithoutScoreInput } from '../subject/subject-create-nested-one-without-score.input';
import { UserCreateNestedOneWithoutScoreInput } from '../user/user-create-nested-one-without-score.input';
import { DocCreateNestedOneWithoutScoreInput } from '../doc/doc-create-nested-one-without-score.input';

@InputType()
export class ScoreCreateWithoutTopicInput {

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    correct!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    wrong!: number;

    @Field(() => Int, {nullable:false})
    null!: number;

    @Field(() => GraphQLJSON, {nullable:false})
    alternatives!: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => SubjectCreateNestedOneWithoutScoreInput, {nullable:false})
    subject!: SubjectCreateNestedOneWithoutScoreInput;

    @Field(() => UserCreateNestedOneWithoutScoreInput, {nullable:false})
    user!: UserCreateNestedOneWithoutScoreInput;

    @Field(() => DocCreateNestedOneWithoutScoreInput, {nullable:false})
    document!: DocCreateNestedOneWithoutScoreInput;
}