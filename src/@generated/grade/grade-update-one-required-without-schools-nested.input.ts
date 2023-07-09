import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutSchoolsInput } from './grade-create-without-schools.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutSchoolsInput } from './grade-create-or-connect-without-schools.input';
import { GradeUpsertWithoutSchoolsInput } from './grade-upsert-without-schools.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { GradeUpdateWithoutSchoolsInput } from './grade-update-without-schools.input';

@InputType()
export class GradeUpdateOneRequiredWithoutSchoolsNestedInput {

    @Field(() => GradeCreateWithoutSchoolsInput, {nullable:true})
    @Type(() => GradeCreateWithoutSchoolsInput)
    create?: GradeCreateWithoutSchoolsInput;

    @Field(() => GradeCreateOrConnectWithoutSchoolsInput, {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutSchoolsInput)
    connectOrCreate?: GradeCreateOrConnectWithoutSchoolsInput;

    @Field(() => GradeUpsertWithoutSchoolsInput, {nullable:true})
    @Type(() => GradeUpsertWithoutSchoolsInput)
    upsert?: GradeUpsertWithoutSchoolsInput;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: GradeWhereUniqueInput;

    @Field(() => GradeUpdateWithoutSchoolsInput, {nullable:true})
    @Type(() => GradeUpdateWithoutSchoolsInput)
    update?: GradeUpdateWithoutSchoolsInput;
}
