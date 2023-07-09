import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateWithoutDocumentInput } from './score-create-without-document.input';
import { Type } from 'class-transformer';
import { ScoreCreateOrConnectWithoutDocumentInput } from './score-create-or-connect-without-document.input';
import { ScoreCreateManyDocumentInputEnvelope } from './score-create-many-document-input-envelope.input';
import { ScoreWhereUniqueInput } from './score-where-unique.input';

@InputType()
export class ScoreUncheckedCreateNestedManyWithoutDocumentInput {

    @Field(() => [ScoreCreateWithoutDocumentInput], {nullable:true})
    @Type(() => ScoreCreateWithoutDocumentInput)
    create?: Array<ScoreCreateWithoutDocumentInput>;

    @Field(() => [ScoreCreateOrConnectWithoutDocumentInput], {nullable:true})
    @Type(() => ScoreCreateOrConnectWithoutDocumentInput)
    connectOrCreate?: Array<ScoreCreateOrConnectWithoutDocumentInput>;

    @Field(() => ScoreCreateManyDocumentInputEnvelope, {nullable:true})
    @Type(() => ScoreCreateManyDocumentInputEnvelope)
    createMany?: ScoreCreateManyDocumentInputEnvelope;

    @Field(() => [ScoreWhereUniqueInput], {nullable:true})
    @Type(() => ScoreWhereUniqueInput)
    connect?: Array<ScoreWhereUniqueInput>;
}
