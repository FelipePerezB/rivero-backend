import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolUpdateWithoutSubjectsInput } from './school-update-without-subjects.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutSubjectsInput } from './school-create-without-subjects.input';

@InputType()
export class SchoolUpsertWithoutSubjectsInput {

    @Field(() => SchoolUpdateWithoutSubjectsInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutSubjectsInput)
    update!: SchoolUpdateWithoutSubjectsInput;

    @Field(() => SchoolCreateWithoutSubjectsInput, {nullable:false})
    @Type(() => SchoolCreateWithoutSubjectsInput)
    create!: SchoolCreateWithoutSubjectsInput;
}
