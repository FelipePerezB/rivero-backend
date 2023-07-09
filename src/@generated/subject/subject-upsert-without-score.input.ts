import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectUpdateWithoutScoreInput } from './subject-update-without-score.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutScoreInput } from './subject-create-without-score.input';

@InputType()
export class SubjectUpsertWithoutScoreInput {

    @Field(() => SubjectUpdateWithoutScoreInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutScoreInput)
    update!: SubjectUpdateWithoutScoreInput;

    @Field(() => SubjectCreateWithoutScoreInput, {nullable:false})
    @Type(() => SubjectCreateWithoutScoreInput)
    create!: SubjectCreateWithoutScoreInput;
}
