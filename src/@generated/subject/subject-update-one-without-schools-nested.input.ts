import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutSchoolsInput } from './subject-create-without-schools.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutSchoolsInput } from './subject-create-or-connect-without-schools.input';
import { SubjectUpsertWithoutSchoolsInput } from './subject-upsert-without-schools.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { SubjectUpdateWithoutSchoolsInput } from './subject-update-without-schools.input';

@InputType()
export class SubjectUpdateOneWithoutSchoolsNestedInput {

    @Field(() => SubjectCreateWithoutSchoolsInput, {nullable:true})
    @Type(() => SubjectCreateWithoutSchoolsInput)
    create?: SubjectCreateWithoutSchoolsInput;

    @Field(() => SubjectCreateOrConnectWithoutSchoolsInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutSchoolsInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutSchoolsInput;

    @Field(() => SubjectUpsertWithoutSchoolsInput, {nullable:true})
    @Type(() => SubjectUpsertWithoutSchoolsInput)
    upsert?: SubjectUpsertWithoutSchoolsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;

    @Field(() => SubjectUpdateWithoutSchoolsInput, {nullable:true})
    @Type(() => SubjectUpdateWithoutSchoolsInput)
    update?: SubjectUpdateWithoutSchoolsInput;
}
