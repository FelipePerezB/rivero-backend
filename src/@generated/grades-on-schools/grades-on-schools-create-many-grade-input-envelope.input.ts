import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateManyGradeInput } from './grades-on-schools-create-many-grade.input';
import { Type } from 'class-transformer';

@InputType()
export class GradesOnSchoolsCreateManyGradeInputEnvelope {

    @Field(() => [GradesOnSchoolsCreateManyGradeInput], {nullable:false})
    @Type(() => GradesOnSchoolsCreateManyGradeInput)
    data!: Array<GradesOnSchoolsCreateManyGradeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
