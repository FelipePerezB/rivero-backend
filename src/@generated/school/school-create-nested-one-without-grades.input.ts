import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutGradesInput } from './school-create-without-grades.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutGradesInput } from './school-create-or-connect-without-grades.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedOneWithoutGradesInput {

    @Field(() => SchoolCreateWithoutGradesInput, {nullable:true})
    @Type(() => SchoolCreateWithoutGradesInput)
    create?: SchoolCreateWithoutGradesInput;

    @Field(() => SchoolCreateOrConnectWithoutGradesInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutGradesInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutGradesInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: SchoolWhereUniqueInput;
}
