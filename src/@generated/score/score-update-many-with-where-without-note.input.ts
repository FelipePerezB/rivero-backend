import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreScalarWhereInput } from './score-scalar-where.input';
import { Type } from 'class-transformer';
import { ScoreUpdateManyMutationInput } from './score-update-many-mutation.input';

@InputType()
export class ScoreUpdateManyWithWhereWithoutNoteInput {

    @Field(() => ScoreScalarWhereInput, {nullable:false})
    @Type(() => ScoreScalarWhereInput)
    where!: ScoreScalarWhereInput;

    @Field(() => ScoreUpdateManyMutationInput, {nullable:false})
    @Type(() => ScoreUpdateManyMutationInput)
    data!: ScoreUpdateManyMutationInput;
}
