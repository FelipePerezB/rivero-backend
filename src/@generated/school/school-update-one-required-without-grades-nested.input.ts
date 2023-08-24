import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolCreateWithoutGradesInput } from './school-create-without-grades.input';
import { Type } from 'class-transformer';
import { SchoolCreateOrConnectWithoutGradesInput } from './school-create-or-connect-without-grades.input';
import { SchoolUpsertWithoutGradesInput } from './school-upsert-without-grades.input';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { SchoolUpdateToOneWithWhereWithoutGradesInput } from './school-update-to-one-with-where-without-grades.input';

@InputType()
export class SchoolUpdateOneRequiredWithoutGradesNestedInput {

    @Field(() => SchoolCreateWithoutGradesInput, {nullable:true})
    @Type(() => SchoolCreateWithoutGradesInput)
    create?: SchoolCreateWithoutGradesInput;

    @Field(() => SchoolCreateOrConnectWithoutGradesInput, {nullable:true})
    @Type(() => SchoolCreateOrConnectWithoutGradesInput)
    connectOrCreate?: SchoolCreateOrConnectWithoutGradesInput;

    @Field(() => SchoolUpsertWithoutGradesInput, {nullable:true})
    @Type(() => SchoolUpsertWithoutGradesInput)
    upsert?: SchoolUpsertWithoutGradesInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:true})
    @Type(() => SchoolWhereUniqueInput)
    connect?: SchoolWhereUniqueInput;

    @Field(() => SchoolUpdateToOneWithWhereWithoutGradesInput, {nullable:true})
    @Type(() => SchoolUpdateToOneWithWhereWithoutGradesInput)
    update?: SchoolUpdateToOneWithWhereWithoutGradesInput;
}
