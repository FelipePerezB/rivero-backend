import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateManySubjectInput } from './score-create-many-subject.input';
import { Type } from 'class-transformer';

@InputType()
export class ScoreCreateManySubjectInputEnvelope {

    @Field(() => [ScoreCreateManySubjectInput], {nullable:false})
    @Type(() => ScoreCreateManySubjectInput)
    data!: Array<ScoreCreateManySubjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
