import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreUpdateWithoutDocumentInput } from './score-update-without-document.input';

@InputType()
export class ScoreUpdateWithWhereUniqueWithoutDocumentInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreUpdateWithoutDocumentInput, {nullable:false})
    @Type(() => ScoreUpdateWithoutDocumentInput)
    data!: ScoreUpdateWithoutDocumentInput;
}
