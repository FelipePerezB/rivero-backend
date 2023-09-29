import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateManyUserInput } from './score-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ScoreCreateManyUserInputEnvelope {

    @Field(() => [ScoreCreateManyUserInput], {nullable:false})
    @Type(() => ScoreCreateManyUserInput)
    data!: Array<ScoreCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
