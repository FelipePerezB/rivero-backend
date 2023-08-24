import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolUpdateWithoutGradesInput } from './school-update-without-grades.input';
import { Type } from 'class-transformer';
import { SchoolCreateWithoutGradesInput } from './school-create-without-grades.input';
import { SchoolWhereInput } from './school-where.input';

@InputType()
export class SchoolUpsertWithoutGradesInput {

    @Field(() => SchoolUpdateWithoutGradesInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutGradesInput)
    update!: SchoolUpdateWithoutGradesInput;

    @Field(() => SchoolCreateWithoutGradesInput, {nullable:false})
    @Type(() => SchoolCreateWithoutGradesInput)
    create!: SchoolCreateWithoutGradesInput;

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;
}
