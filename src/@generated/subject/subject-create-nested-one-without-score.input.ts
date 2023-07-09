import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutScoreInput } from './subject-create-without-score.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutScoreInput } from './subject-create-or-connect-without-score.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';

@InputType()
export class SubjectCreateNestedOneWithoutScoreInput {

    @Field(() => SubjectCreateWithoutScoreInput, {nullable:true})
    @Type(() => SubjectCreateWithoutScoreInput)
    create?: SubjectCreateWithoutScoreInput;

    @Field(() => SubjectCreateOrConnectWithoutScoreInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutScoreInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutScoreInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;
}
