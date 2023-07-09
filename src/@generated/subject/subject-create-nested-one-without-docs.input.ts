import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutDocsInput } from './subject-create-without-docs.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutDocsInput } from './subject-create-or-connect-without-docs.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';

@InputType()
export class SubjectCreateNestedOneWithoutDocsInput {

    @Field(() => SubjectCreateWithoutDocsInput, {nullable:true})
    @Type(() => SubjectCreateWithoutDocsInput)
    create?: SubjectCreateWithoutDocsInput;

    @Field(() => SubjectCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutDocsInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutDocsInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;
}
