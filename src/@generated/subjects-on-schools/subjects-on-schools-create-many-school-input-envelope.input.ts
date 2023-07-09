import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateManySchoolInput } from './subjects-on-schools-create-many-school.input';
import { Type } from 'class-transformer';

@InputType()
export class SubjectsOnSchoolsCreateManySchoolInputEnvelope {

    @Field(() => [SubjectsOnSchoolsCreateManySchoolInput], {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateManySchoolInput)
    data!: Array<SubjectsOnSchoolsCreateManySchoolInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
