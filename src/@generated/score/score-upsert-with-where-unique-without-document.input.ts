import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreUpdateWithoutDocumentInput } from './score-update-without-document.input';
import { ScoreCreateWithoutDocumentInput } from './score-create-without-document.input';

@InputType()
export class ScoreUpsertWithWhereUniqueWithoutDocumentInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreUpdateWithoutDocumentInput, {nullable:false})
    @Type(() => ScoreUpdateWithoutDocumentInput)
    update!: ScoreUpdateWithoutDocumentInput;

    @Field(() => ScoreCreateWithoutDocumentInput, {nullable:false})
    @Type(() => ScoreCreateWithoutDocumentInput)
    create!: ScoreCreateWithoutDocumentInput;
}
