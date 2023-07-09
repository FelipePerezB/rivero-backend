import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutSchoolsInput } from './grade-create-without-schools.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutSchoolsInput } from './grade-create-or-connect-without-schools.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';

@InputType()
export class GradeCreateNestedOneWithoutSchoolsInput {

    @Field(() => GradeCreateWithoutSchoolsInput, {nullable:true})
    @Type(() => GradeCreateWithoutSchoolsInput)
    create?: GradeCreateWithoutSchoolsInput;

    @Field(() => GradeCreateOrConnectWithoutSchoolsInput, {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutSchoolsInput)
    connectOrCreate?: GradeCreateOrConnectWithoutSchoolsInput;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: GradeWhereUniqueInput;
}
