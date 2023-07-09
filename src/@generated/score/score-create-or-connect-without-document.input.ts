import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreCreateWithoutDocumentInput } from './score-create-without-document.input';

@InputType()
export class ScoreCreateOrConnectWithoutDocumentInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreCreateWithoutDocumentInput, {nullable:false})
    @Type(() => ScoreCreateWithoutDocumentInput)
    create!: ScoreCreateWithoutDocumentInput;
}
