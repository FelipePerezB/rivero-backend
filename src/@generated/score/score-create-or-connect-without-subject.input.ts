import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreWhereUniqueInput } from './score-where-unique.input';
import { Type } from 'class-transformer';
import { ScoreCreateWithoutSubjectInput } from './score-create-without-subject.input';

@InputType()
export class ScoreCreateOrConnectWithoutSubjectInput {

    @Field(() => ScoreWhereUniqueInput, {nullable:false})
    @Type(() => ScoreWhereUniqueInput)
    where!: ScoreWhereUniqueInput;

    @Field(() => ScoreCreateWithoutSubjectInput, {nullable:false})
    @Type(() => ScoreCreateWithoutSubjectInput)
    create!: ScoreCreateWithoutSubjectInput;
}
