import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutScoreInput } from './doc-update-without-score.input';

@InputType()
export class DocUpdateToOneWithWhereWithoutScoreInput {

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;

    @Field(() => DocUpdateWithoutScoreInput, {nullable:false})
    @Type(() => DocUpdateWithoutScoreInput)
    data!: DocUpdateWithoutScoreInput;
}
