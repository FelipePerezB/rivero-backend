import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocUpdateWithoutGradesInput } from './doc-update-without-grades.input';
import { Type } from 'class-transformer';
import { DocCreateWithoutGradesInput } from './doc-create-without-grades.input';

@InputType()
export class DocUpsertWithoutGradesInput {

    @Field(() => DocUpdateWithoutGradesInput, {nullable:false})
    @Type(() => DocUpdateWithoutGradesInput)
    update!: DocUpdateWithoutGradesInput;

    @Field(() => DocCreateWithoutGradesInput, {nullable:false})
    @Type(() => DocCreateWithoutGradesInput)
    create!: DocCreateWithoutGradesInput;
}
