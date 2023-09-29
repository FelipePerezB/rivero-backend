import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutUserInput } from './score-create-without-user.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutUserInput } from './score-create-or-connect-without-user.input';
import { ScoreCreateManyUserInputEnvelope } from './score-create-many-user-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';

@InputType()
export class ScoreUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ScoreCreateWithoutUserInput], {nullable:true})
    @Type(() => ScoreCreateWithoutUserInput)
    create?: Array<ScoreCreateWithoutUserInput>;

    @Field(() => [ScoreCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutUserInput>;

    @Field(() => ScoreCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyUserInputEnvelope)
    createMany?: ScoreCreateManyUserInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;
}
