import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScoreCreateManyDocumentInput } from './score-create-many-document.input';
import { Type } from 'class-transformer';

@InputType()
export class ScoreCreateManyDocumentInputEnvelope {

    @Field(() => [ScoreCreateManyDocumentInput], {nullable:false})
    @Type(() => ScoreCreateManyDocumentInput)
    data!: Array<ScoreCreateManyDocumentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
