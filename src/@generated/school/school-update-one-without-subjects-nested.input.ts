import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutSubjectsInput } from './school-create-without-subjects.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutSubjectsInput } from './school-create-or-connect-without-subjects.input';
import { SchoolUpsertWithoutSubjectsInput } from './school-upsert-without-subjects.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateWithoutSubjectsInput } from './school-update-without-subjects.input';

@InputType()
export class SchoolUpdateOneWithoutSubjectsNestedInput {

    @Field(() => SchoolCreateWithoutSubjectsInput, {nullable:true})
    @Type(() => SchoolCreateWithoutSubjectsInput)
    create?: SchoolCreateWithoutSubjectsInput;

    @Field(() => SchoolCreateOrConnectWithoutSubjectsInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutSubjectsInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutSubjectsInput;

    @Field(() => SchoolUpsertWithoutSubjectsInput, {nullable:true})
    @Type(() => SchoolUpsertWithoutSubjectsInput)
    upsert?: SchoolUpsertWithoutSubjectsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateWithoutSubjectsInput, {nullable:true})
    @Type(() => SchoolUpdateWithoutSubjectsInput)
    update?: SchoolUpdateWithoutSubjectsInput;
}
