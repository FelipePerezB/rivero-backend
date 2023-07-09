import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutSchoolsInput } from './subject-create-without-schools.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutSchoolsInput } from './subject-create-or-connect-without-schools.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';

@InputType()
export class SubjectCreateNestedOneWithoutSchoolsInput {

    @Field(() => SubjectCreateWithoutSchoolsInput, {nullable:true})
    @Type(() => SubjectCreateWithoutSchoolsInput)
    create?: SubjectCreateWithoutSchoolsInput;

    @Field(() => SubjectCreateOrConnectWithoutSchoolsInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutSchoolsInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutSchoolsInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;
}
