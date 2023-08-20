import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocUpdateWithoutScoreInput } from './doc-update-without-score.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutScoreInput } from './doc-create-without-score.input';
import { DocWhereInput } from './doc-where.input';

@InputType()
export class DocUpsertWithoutScoreInput {

    @Field(() => DocUpdateWithoutScoreInput, {nullable:false})
    @Type(() => DocUpdateWithoutScoreInput)
    update!: DocUpdateWithoutScoreInput;

    @Field(() => DocCreateWithoutScoreInput, {nullable:false})
    @Type(() => DocCreateWithoutScoreInput)
    create!: DocCreateWithoutScoreInput;

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;
}
