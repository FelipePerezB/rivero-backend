import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeUpdateWithoutSchoolInput } from './grade-update-without-school.input';

@InputType()
export class GradeUpdateWithWhereUniqueWithoutSchoolInput {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeUpdateWithoutSchoolInput, {nullable:false})
    @Type(() => GradeUpdateWithoutSchoolInput)
    data!: GradeUpdateWithoutSchoolInput;
}
