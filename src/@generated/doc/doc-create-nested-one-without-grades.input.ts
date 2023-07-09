import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutGradesInput } from './doc-create-without-grades.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutGradesInput } from './doc-create-or-connect-without-grades.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';

@InputType()
export class DocCreateNestedOneWithoutGradesInput {

    @Field(() => DocCreateWithoutGradesInput, {nullable:true})
    @Type(() => DocCreateWithoutGradesInput)
    create?: DocCreateWithoutGradesInput;

    @Field(() => DocCreateOrConnectWithoutGradesInput, {nullable:true})
    @Type(() => DocCreateOrConnectWithoutGradesInput)
    connectOrCreate?: DocCreateOrConnectWithoutGradesInput;

    @Field(() => DocWhereUniqueInput, {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: DocWhereUniqueInput;
}
