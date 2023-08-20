import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutDocsInput } from './subject-create-without-docs.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutDocsInput } from './subject-create-or-connect-without-docs.input';
import { SubjectUpsertWithoutDocsInput } from './subject-upsert-without-docs.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { SubjectUpdateToOneWithWhereWithoutDocsInput } from './subject-update-to-one-with-where-without-docs.input';

@InputType()
export class SubjectUpdateOneRequiredWithoutDocsNestedInput {

    @Field(() => SubjectCreateWithoutDocsInput, {nullable:true})
    @Type(() => SubjectCreateWithoutDocsInput)
    create?: SubjectCreateWithoutDocsInput;

    @Field(() => SubjectCreateOrConnectWithoutDocsInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutDocsInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutDocsInput;

    @Field(() => SubjectUpsertWithoutDocsInput, {nullable:true})
    @Type(() => SubjectUpsertWithoutDocsInput)
    upsert?: SubjectUpsertWithoutDocsInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;

    @Field(() => SubjectUpdateToOneWithWhereWithoutDocsInput, {nullable:true})
    @Type(() => SubjectUpdateToOneWithWhereWithoutDocsInput)
    update?: SubjectUpdateToOneWithWhereWithoutDocsInput;
}
