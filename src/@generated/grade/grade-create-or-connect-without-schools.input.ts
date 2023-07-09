import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Type } from 'class-transformer';
import { GradeCreateWithoutSchoolsInput } from './grade-create-without-schools.input';

@InputType()
export class GradeCreateOrConnectWithoutSchoolsInput {

    @Field(() => GradeWhereUniqueInput, {nullable:false})
    @Type(() => GradeWhereUniqueInput)
    where!: GradeWhereUniqueInput;

    @Field(() => GradeCreateWithoutSchoolsInput, {nullable:false})
    @Type(() => GradeCreateWithoutSchoolsInput)
    create!: GradeCreateWithoutSchoolsInput;
}
