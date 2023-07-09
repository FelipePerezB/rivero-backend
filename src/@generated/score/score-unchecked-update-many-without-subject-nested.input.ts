import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutSubjectInput } from './score-create-without-subject.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutSubjectInput } from './score-create-or-connect-without-subject.input';
import { ScoreUpsertWithWhereUniqueWithoutSubjectInput } from './score-upsert-with-where-unique-without-subject.input';
import { ScoreCreateManySubjectInputEnvelope } from './score-create-many-subject-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { ScoreUpdateWithWhereUniqueWithoutSubjectInput } from './score-update-with-where-unique-without-subject.input';
import { ScoreUpdateManyWithWhereWithoutSubjectInput } from './score-update-many-with-where-without-subject.input';
import { ScoreScalarWhereInput } from './score-scalar-where.input';

@InputType()
export class ScoreUncheckedUpdateManyWithoutSubjectNestedInput {

    @Field(() => [ScoreCreateWithoutSubjectInput], {nullable:true})
    @Type(() => ScoreCreateWithoutSubjectInput)
    create?: Array<ScoreCreateWithoutSubjectInput>;

    @Field(() => [ScoreCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutSubjectInput>;

    @Field(() => [ScoreUpsertWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => ScoreUpsertWithWhereUniqueWithoutSubjectInput)
    upsert?: Array<ScoreUpsertWithWhereUniqueWithoutSubjectInput>;

    @Field(() => ScoreCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManySubjectInputEnvelope)
    createMany?: ScoreCreateManySubjectInputEnvelope;

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

    @Field(() => [ScoreUpdateWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => ScoreUpdateWithWhereUniqueWithoutSubjectInput)
    update?: Array<ScoreUpdateWithWhereUniqueWithoutSubjectInput>;

    @Field(() => [ScoreUpdateManyWithWhereWithoutSubjectInput], {nullable:true})
    @Type(() => ScoreUpdateManyWithWhereWithoutSubjectInput)
    updateMany?: Array<ScoreUpdateManyWithWhereWithoutSubjectInput>;

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    @Type(() => ScoreScalarWhereInput)
    deleteMany?: Array<ScoreScalarWhereInput>;
}
