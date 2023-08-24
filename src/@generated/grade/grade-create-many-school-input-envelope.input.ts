import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateManySchoolInput } from './grade-create-many-school.input';
import { Type } from 'class-transformer';

@InputType()
export class GradeCreateManySchoolInputEnvelope {

    @Field(() => [GradeCreateManySchoolInput], {nullable:false})
    @Type(() => GradeCreateManySchoolInput)
    data!: Array<GradeCreateManySchoolInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
