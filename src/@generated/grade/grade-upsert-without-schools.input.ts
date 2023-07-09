import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeUpdateWithoutSchoolsInput } from './grade-update-without-schools.input';
import { Type } from 'class-transformer';
import { GradeCreateWithoutSchoolsInput } from './grade-create-without-schools.input';

@InputType()
export class GradeUpsertWithoutSchoolsInput {

    @Field(() => GradeUpdateWithoutSchoolsInput, {nullable:false})
    @Type(() => GradeUpdateWithoutSchoolsInput)
    update!: GradeUpdateWithoutSchoolsInput;

    @Field(() => GradeCreateWithoutSchoolsInput, {nullable:false})
    @Type(() => GradeCreateWithoutSchoolsInput)
    create!: GradeCreateWithoutSchoolsInput;
}
