import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeCreateWithoutSchoolInput } from './grade-create-without-school.input';

@InputType()
export class GradeCreateOrConnectWithoutSchoolInput {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeCreateWithoutSchoolInput, {nullable:false})
    @Type(() => GradeCreateWithoutSchoolInput)
    create!: GradeCreateWithoutSchoolInput;
}
