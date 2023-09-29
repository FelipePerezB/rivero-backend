import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateManyNoteInput } from './score-create-many-note.input';
import { Type } from 'class-transformer';

@InputType()
export class ScoreCreateManyNoteInputEnvelope {

    @Field(() => [ScoreCreateManyNoteInput], {nullable:false})
    @Type(() => ScoreCreateManyNoteInput)
    data!: Array<ScoreCreateManyNoteInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
