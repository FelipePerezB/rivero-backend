import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { Type } from 'class-transformer';
import { GradeUpdateWithoutSchoolsInput } from './grade-update-without-schools.input';

@InputType()
export class GradeUpdateToOneWithWhereWithoutSchoolsInput {

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;

    @Field(() => GradeUpdateWithoutSchoolsInput, {nullable:false})
    @Type(() => GradeUpdateWithoutSchoolsInput)
    data!: GradeUpdateWithoutSchoolsInput;
}
