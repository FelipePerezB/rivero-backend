import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutSchoolsInput } from './subject-create-without-schools.input';

@InputType()
export class SubjectCreateOrConnectWithoutSchoolsInput {

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;

    @Field(() => SubjectCreateWithoutSchoolsInput, {nullable:false})
    @Type(() => SubjectCreateWithoutSchoolsInput)
    create!: SubjectCreateWithoutSchoolsInput;
}
