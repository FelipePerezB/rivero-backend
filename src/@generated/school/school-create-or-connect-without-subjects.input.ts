import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutSubjectsInput } from './school-create-without-subjects.input';

@InputType()
export class SchoolCreateOrConnectWithoutSubjectsInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateWithoutSubjectsInput, {nullable:false})
    @Type(() => SchoolCreateWithoutSubjectsInput)
    create!: SchoolCreateWithoutSubjectsInput;
}
