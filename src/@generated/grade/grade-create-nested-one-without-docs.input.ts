import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutDocsInput } from './grade-create-without-docs.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutDocsInput } from './grade-create-or-connect-without-docs.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';

@InputType()
export class GradeCreateNestedOneWithoutDocsInput {

    @Field(() => GradeCreateWithoutDocsInput, {nullable:true})
    @Type(() => GradeCreateWithoutDocsInput)
    create?: GradeCreateWithoutDocsInput;

    @Field(() => GradeCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutDocsInput)
    connectOrCreate?: GradeCreateOrConnectWithoutDocsInput;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: GradeWhereUniqueInput;
}
