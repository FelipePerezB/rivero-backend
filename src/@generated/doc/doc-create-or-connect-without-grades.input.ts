import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereUniqueInput } from './doc-where-unique.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutGradesInput } from './doc-create-without-grades.input';

@InputType()
export class DocCreateOrConnectWithoutGradesInput {

    @Field(() => DocWhereUniqueInput, {nullable:false})
    @Type(() => DocWhereUniqueInput)
    where!: DocWhereUniqueInput;

    @Field(() => DocCreateWithoutGradesInput, {nullable:false})
    @Type(() => DocCreateWithoutGradesInput)
    create!: DocCreateWithoutGradesInput;
}
