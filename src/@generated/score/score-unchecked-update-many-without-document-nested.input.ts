import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutDocumentInput } from './score-create-without-document.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutDocumentInput } from './score-create-or-connect-without-document.input';
import { ScoreUpsertWithWhereUniqueWithoutDocumentInput } from './score-upsert-with-where-unique-without-document.input';
import { ScoreCreateManyDocumentInputEnvelope } from './score-create-many-document-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { ScoreUpdateWithWhereUniqueWithoutDocumentInput } from './score-update-with-where-unique-without-document.input';
import { ScoreUpdateManyWithWhereWithoutDocumentInput } from './score-update-many-with-where-without-document.input';
import { ScoreScalarWhereInput } from './score-scalar-where.input';

@InputType()
export class ScoreUncheckedUpdateManyWithoutDocumentNestedInput {

    @Field(() => [ScoreCreateWithoutDocumentInput], {nullable:true})
    @Type(() => ScoreCreateWithoutDocumentInput)
    create?: Array<ScoreCreateWithoutDocumentInput>;

    @Field(() => [ScoreCreateOrConnectWithoutDocumentInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutDocumentInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutDocumentInput>;

    @Field(() => [ScoreUpsertWithWhereUniqueWithoutDocumentInput], {nullable:true})
    @Type(() => ScoreUpsertWithWhereUniqueWithoutDocumentInput)
    upsert?: Array<ScoreUpsertWithWhereUniqueWithoutDocumentInput>;

    @Field(() => ScoreCreateManyDocumentInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyDocumentInputEnvelope)
    createMany?: ScoreCreateManyDocumentInputEnvelope;

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

    @Field(() => [ScoreUpdateWithWhereUniqueWithoutDocumentInput], {nullable:true})
    @Type(() => ScoreUpdateWithWhereUniqueWithoutDocumentInput)
    update?: Array<ScoreUpdateWithWhereUniqueWithoutDocumentInput>;

    @Field(() => [ScoreUpdateManyWithWhereWithoutDocumentInput], {nullable:true})
    @Type(() => ScoreUpdateManyWithWhereWithoutDocumentInput)
    updateMany?: Array<ScoreUpdateManyWithWhereWithoutDocumentInput>;

    @Field(() => [ScoreScalarWhereInput], {nullable:true})
    @Type(() => ScoreScalarWhereInput)
    deleteMany?: Array<ScoreScalarWhereInput>;
}
