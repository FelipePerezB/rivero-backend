import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutScoreInput } from './doc-create-without-score.input';

@InputType()
export class DocCreateOrConnectWithoutScoreInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocCreateWithoutScoreInput, {nullable:false})
    @Type(() => DocCreateWithoutScoreInput)
    create!: DocCreateWithoutScoreInput;
}
