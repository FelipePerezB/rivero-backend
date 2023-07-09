import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutScoreInput } from './subject-create-without-score.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutScoreInput } from './subject-create-or-connect-without-score.input';
import { SubjectUpsertWithoutScoreInput } from './subject-upsert-without-score.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { SubjectUpdateWithoutScoreInput } from './subject-update-without-score.input';

@InputType()
export class SubjectUpdateOneRequiredWithoutScoreNestedInput {

    @Field(() => SubjectCreateWithoutScoreInput, {nullable:true})
    @Type(() => SubjectCreateWithoutScoreInput)
    create?: SubjectCreateWithoutScoreInput;

    @Field(() => SubjectCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutScoreInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutScoreInput;

    @Field(() => SubjectUpsertWithoutScoreInput, {nullable:true})
    @Type(() => SubjectUpsertWithoutScoreInput)
    upsert?: SubjectUpsertWithoutScoreInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;

    @Field(() => SubjectUpdateWithoutScoreInput, {nullable:true})
    @Type(() => SubjectUpdateWithoutScoreInput)
    update?: SubjectUpdateWithoutScoreInput;
}
