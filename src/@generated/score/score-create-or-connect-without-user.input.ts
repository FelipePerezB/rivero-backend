import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreCreateWithoutUserInput } from './score-create-without-user.input';

@InputType()
export class ScoreCreateOrConnectWithoutUserInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreCreateWithoutUserInput, {nullable:false})
    @Type(() => ScoreCreateWithoutUserInput)
    create!: ScoreCreateWithoutUserInput;
}
