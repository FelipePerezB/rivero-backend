import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateManySchoolsInput } from './grade-create-many-schools.input';
import { Type } from 'class-transformer';

@InputType()
export class GradeCreateManySchoolsInputEnvelope {

    @Field(() => [GradeCreateManySchoolsInput], {nullable:false})
    @Type(() => GradeCreateManySchoolsInput)
    data!: Array<GradeCreateManySchoolsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
