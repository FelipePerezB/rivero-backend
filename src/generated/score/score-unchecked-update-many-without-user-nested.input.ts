import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutUserInput } from './score-create-without-user.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutUserInput } from './score-create-or-connect-without-user.input';
import { ScoreUpsertWithWhereUniqueWithoutUserInput } from './score-upsert-with-where-unique-without-user.input';
import { ScoreCreateManyUserInputEnvelope } from './score-create-many-user-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { ScoreUpdateWithWhereUniqueWithoutUserInput } from './score-update-with-where-unique-without-user.input';
import { ScoreUpdateManyWithWhereWithoutUserInput } from './score-update-many-with-where-without-user.input';
import { ScoreScalarWhereInput } from './score-scalar-where.input';

@InputType()
export class ScoreUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ScoreCreateWithoutUserInput], {nullable:true})
    @Type(() => ScoreCreateWithoutUserInput)
    create?: Array<ScoreCreateWithoutUserInput>;

    @Field(() => [ScoreCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutUserInput>;

    @Field(() => [ScoreUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ScoreUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ScoreUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ScoreCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyUserInputEnvelope)
    createMany?: ScoreCreateManyUserInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    set?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    disconnect?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    delete?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;

    @Field(() => [ScoreUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ScoreUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ScoreUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ScoreUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ScoreUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ScoreUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    @Type(() => ScoreScalarWhereInput)
    deleteMany?: Array<ScoreScalarWhereInput>;
}
