import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutScoreInput } from './doc-create-without-score.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutScoreInput } from './doc-create-or-connect-without-score.input';
import { DocUpsertWithoutScoreInput } from './doc-upsert-without-score.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { DocUpdateWithoutScoreInput } from './doc-update-without-score.input';

@InputType()
export class DocUpdateOneRequiredWithoutScoreNestedInput {

    @Field(() => DocCreateWithoutScoreInput, {nullable:true})
    @Type(() => DocCreateWithoutScoreInput)
    create?: DocCreateWithoutScoreInput;

    @Field(() => DocCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => DocCreateOrConnectWithoutScoreInput)
    connectOrCreate?: DocCreateOrConnectWithoutScoreInput;

    @Field(() => DocUpsertWithoutScoreInput, {nullable:true})
    @Type(() => DocUpsertWithoutScoreInput)
    upsert?: DocUpsertWithoutScoreInput;

    @Field(() => DocWhereUniqueInput, {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutScoreInput, {nullable:true})
    @Type(() => DocUpdateWithoutScoreInput)
    update?: DocUpdateWithoutScoreInput;
}
