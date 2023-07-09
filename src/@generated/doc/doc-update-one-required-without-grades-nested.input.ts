import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocCreateWithoutGradesInput } from './doc-create-without-grades.input';
import { Type } from 'class-transformer';
import { DocCreateOrConnectWithoutGradesInput } from './doc-create-or-connect-without-grades.input';
import { DocUpsertWithoutGradesInput } from './doc-upsert-without-grades.input';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { DocUpdateWithoutGradesInput } from './doc-update-without-grades.input';

@InputType()
export class DocUpdateOneRequiredWithoutGradesNestedInput {

    @Field(() => DocCreateWithoutGradesInput, {nullable:true})
    @Type(() => DocCreateWithoutGradesInput)
    create?: DocCreateWithoutGradesInput;

    @Field(() => DocCreateOrConnectWithoutGradesInput, {nullable:true})
    @Type(() => DocCreateOrConnectWithoutGradesInput)
    connectOrCreate?: DocCreateOrConnectWithoutGradesInput;

    @Field(() => DocUpsertWithoutGradesInput, {nullable:true})
    @Type(() => DocUpsertWithoutGradesInput)
    upsert?: DocUpsertWithoutGradesInput;

    @Field(() => DocWhereUniqueInput, {nullable:true})
    @Type(() => DocWhereUniqueInput)
    connect?: DocWhereUniqueInput;

    @Field(() => DocUpdateWithoutGradesInput, {nullable:true})
    @Type(() => DocUpdateWithoutGradesInput)
    update?: DocUpdateWithoutGradesInput;
}
