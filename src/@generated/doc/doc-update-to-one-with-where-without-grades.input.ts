import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocWhereInput } from './doc-where.input';
import { Type } from 'class-transformer';
import { DocUpdateWithoutGradesInput } from './doc-update-without-grades.input';

@InputType()
export class DocUpdateToOneWithWhereWithoutGradesInput {

    @Field(() => DocWhereInput, {nullable:true})
    @Type(() => DocWhereInput)
    where?: DocWhereInput;

    @Field(() => DocUpdateWithoutGradesInput, {nullable:false})
    @Type(() => DocUpdateWithoutGradesInput)
    data!: DocUpdateWithoutGradesInput;
}
