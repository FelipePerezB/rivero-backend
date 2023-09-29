import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScoreCreateManyInput } from './score-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyScoreArgs {

    @Field(() => [ScoreCreateManyInput], {nullable:false})
    @Type(() => ScoreCreateManyInput)
    data!: Array<ScoreCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
