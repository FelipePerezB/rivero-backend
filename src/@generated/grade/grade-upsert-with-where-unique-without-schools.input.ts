import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeUpdateWithoutSchoolsInput } from './grade-update-without-schools.input';
import { GradeCreateWithoutSchoolsInput } from './grade-create-without-schools.input';

@InputType()
export class GradeUpsertWithWhereUniqueWithoutSchoolsInput {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeUpdateWithoutSchoolsInput, {nullable:false})
    @Type(() => GradeUpdateWithoutSchoolsInput)
    update!: GradeUpdateWithoutSchoolsInput;

    @Field(() => GradeCreateWithoutSchoolsInput, {nullable:false})
    @Type(() => GradeCreateWithoutSchoolsInput)
    create!: GradeCreateWithoutSchoolsInput;
}
