import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutTopicsInput } from './subject-create-without-topics.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutTopicsInput } from './subject-create-or-connect-without-topics.input';
import { SubjectUpsertWithoutTopicsInput } from './subject-upsert-without-topics.input';
import { SubjectWhereInput } from './subject-where.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { SubjectUpdateToOneWithWhereWithoutTopicsInput } from './subject-update-to-one-with-where-without-topics.input';

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

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    disconnect?: SubjectWhereInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    delete?: SubjectWhereInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;

    @Field(() => SubjectUpdateToOneWithWhereWithoutTopicsInput, {nullable:true})
    @Type(() => SubjectUpdateToOneWithWhereWithoutTopicsInput)
    update?: SubjectUpdateToOneWithWhereWithoutTopicsInput;
}
