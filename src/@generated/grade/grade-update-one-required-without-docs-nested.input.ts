import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutDocsInput } from './grade-create-without-docs.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutDocsInput } from './grade-create-or-connect-without-docs.input';
import { GradeUpsertWithoutDocsInput } from './grade-upsert-without-docs.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { GradeUpdateWithoutDocsInput } from './grade-update-without-docs.input';

@InputType()
export class GradeUpdateOneRequiredWithoutDocsNestedInput {

    @Field(() => GradeCreateWithoutDocsInput, {nullable:true})
    @Type(() => GradeCreateWithoutDocsInput)
    create?: GradeCreateWithoutDocsInput;

    @Field(() => GradeCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutDocsInput)
    connectOrCreate?: GradeCreateOrConnectWithoutDocsInput;

    @Field(() => GradeUpsertWithoutDocsInput, {nullable:true})
    @Type(() => GradeUpsertWithoutDocsInput)
    upsert?: GradeUpsertWithoutDocsInput;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: GradeWhereUniqueInput;

    @Field(() => GradeUpdateWithoutDocsInput, {nullable:true})
    @Type(() => GradeUpdateWithoutDocsInput)
    update?: GradeUpdateWithoutDocsInput;
}
