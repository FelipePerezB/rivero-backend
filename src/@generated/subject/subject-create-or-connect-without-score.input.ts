import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutScoreInput } from './subject-create-without-score.input';

@InputType()
export class SubjectCreateOrConnectWithoutScoreInput {

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;

    @Field(() => SubjectCreateWithoutScoreInput, {nullable:false})
    @Type(() => SubjectCreateWithoutScoreInput)
    create!: SubjectCreateWithoutScoreInput;
}
