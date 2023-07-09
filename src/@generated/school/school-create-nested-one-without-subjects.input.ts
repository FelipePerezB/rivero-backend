import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutSubjectsInput } from './school-create-without-subjects.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutSubjectsInput } from './school-create-or-connect-without-subjects.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@InputType()
export class SchoolCreateNestedOneWithoutSubjectsInput {

    @Field(() => SchoolCreateWithoutSubjectsInput, {nullable:true})
    @Type(() => SchoolCreateWithoutSubjectsInput)
    create?: SchoolCreateWithoutSubjectsInput;

    @Field(() => SchoolCreateOrConnectWithoutSubjectsInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutSubjectsInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutSubjectsInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: SchoolWhereUniqueInput;
}
