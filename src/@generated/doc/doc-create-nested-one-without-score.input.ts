import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutScoreInput } from './doc-create-without-score.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutScoreInput } from './doc-create-or-connect-without-score.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';

@InputType()
export class DocCreateNestedOneWithoutScoreInput {

    @Field(() => DocCreateWithoutScoreInput, {nullable:true})
    @Type(() => DocCreateWithoutScoreInput)
    create?: DocCreateWithoutScoreInput;

    @Field(() => DocCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => DocCreateOrConnectWithoutScoreInput)
    connectOrCreate?: DocCreateOrConnectWithoutScoreInput;

    @Field(() => DocWhereUniqueInput, {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: DocWhereUniqueInput;
}
