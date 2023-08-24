import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SchoolWhereInput } from './school-where.input';
import { Type } from 'class-transformer';
import { SchoolUpdateWithoutGradesInput } from './school-update-without-grades.input';

@InputType()
export class SchoolUpdateToOneWithWhereWithoutGradesInput {

    @Field(() => SchoolWhereInput, {nullable:true})
    @Type(() => SchoolWhereInput)
    where?: SchoolWhereInput;

    @Field(() => SchoolUpdateWithoutGradesInput, {nullable:false})
    @Type(() => SchoolUpdateWithoutGradesInput)
    data!: SchoolUpdateWithoutGradesInput;
}
