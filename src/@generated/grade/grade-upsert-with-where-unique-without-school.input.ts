import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeUpdateWithoutSchoolInput } from './grade-update-without-school.input';
import { GradeCreateWithoutSchoolInput } from './grade-create-without-school.input';

@InputType()
export class GradeUpsertWithWhereUniqueWithoutSchoolInput {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => GradeUpdateWithoutSchoolInput)
    update!: GradeUpdateWithoutSchoolInput;

    @Field(() => GradeCreateWithoutSchoolInput, {nullable:false})
    @Type(() => GradeCreateWithoutSchoolInput)
    create!: GradeCreateWithoutSchoolInput;
}
