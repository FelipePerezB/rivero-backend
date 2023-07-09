import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutTopicsInput } from './subject-create-without-topics.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutTopicsInput } from './subject-create-or-connect-without-topics.input';
import { SubjectUpsertWithoutTopicsInput } from './subject-upsert-without-topics.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { SubjectUpdateWithoutTopicsInput } from './subject-update-without-topics.input';

@InputType()
export class SubjectUpdateOneWithoutTopicsNestedInput {

    @Field(() => SubjectCreateWithoutTopicsInput, {nullable:true})
    @Type(() => SubjectCreateWithoutTopicsInput)
    create?: SubjectCreateWithoutTopicsInput;

    @Field(() => SubjectCreateOrConnectWithoutTopicsInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutTopicsInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutTopicsInput;

    @Field(() => SubjectUpsertWithoutTopicsInput, {nullable:true})
    @Type(() => SubjectUpsertWithoutTopicsInput)
    upsert?: SubjectUpsertWithoutTopicsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;

    @Field(() => SubjectUpdateWithoutTopicsInput, {nullable:true})
    @Type(() => SubjectUpdateWithoutTopicsInput)
    update?: SubjectUpdateWithoutTopicsInput;
}
