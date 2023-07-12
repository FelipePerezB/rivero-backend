import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocCreateNestedOneWithoutScoreInput } from '../doc/doc-create-nested-one-without-score.input';

@InputType()
export class ScoreCreateWithoutUserInput {

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => String, {nullable:false})
    alternatives!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => DocCreateNestedOneWithoutScoreInput, {nullable:false})
    document!: DocCreateNestedOneWithoutScoreInput;
}
