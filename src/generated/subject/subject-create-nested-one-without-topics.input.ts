import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutTopicsInput } from './subject-create-without-topics.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutTopicsInput } from './subject-create-or-connect-without-topics.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';

@InputType()
export class SubjectCreateNestedOneWithoutTopicsInput {

    @Field(() => SubjectCreateWithoutTopicsInput, {nullable:true})
    @Type(() => SubjectCreateWithoutTopicsInput)
    create?: SubjectCreateWithoutTopicsInput;

    @Field(() => SubjectCreateOrConnectWithoutTopicsInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutTopicsInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutTopicsInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;
}
