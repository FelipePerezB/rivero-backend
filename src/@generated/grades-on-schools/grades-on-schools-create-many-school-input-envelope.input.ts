import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateManySchoolInput } from './grades-on-schools-create-many-school.input';
import { Type } from 'class-transformer';

@InputType()
export class GradesOnSchoolsCreateManySchoolInputEnvelope {

    @Field(() => [GradesOnSchoolsCreateManySchoolInput], {nullable:false})
    @Type(() => GradesOnSchoolsCreateManySchoolInput)
    data!: Array<GradesOnSchoolsCreateManySchoolInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
