import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateManyTopicInput } from './score-create-many-topic.input';
import { Type } from 'class-transformer';

@InputType()
export class ScoreCreateManyTopicInputEnvelope {

    @Field(() => [ScoreCreateManyTopicInput], {nullable:false})
    @Type(() => ScoreCreateManyTopicInput)
    data!: Array<ScoreCreateManyTopicInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
