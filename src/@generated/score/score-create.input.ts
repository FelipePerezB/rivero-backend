import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutScoreInput } from '../user/user-create-nested-one-without-score.input';
import { DocCreateNestedOneWithoutScoreInput } from '../doc/doc-create-nested-one-without-score.input';

@InputType()
export class ScoreCreateInput {

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => String, {nullable:false})
    alternatives!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutScoreInput, {nullable:false})
    user!: UserCreateNestedOneWithoutScoreInput;

    @Field(() => DocCreateNestedOneWithoutScoreInput, {nullable:false})
    document!: DocCreateNestedOneWithoutScoreInput;
}
