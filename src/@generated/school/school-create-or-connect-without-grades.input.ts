import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutGradesInput } from './school-create-without-grades.input';

@InputType()
export class SchoolCreateOrConnectWithoutGradesInput {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateWithoutGradesInput, {nullable:false})
    @Type(() => SchoolCreateWithoutGradesInput)
    create!: SchoolCreateWithoutGradesInput;
}
