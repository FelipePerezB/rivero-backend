import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateManySubjectInput } from './subjects-on-schools-create-many-subject.input';
import { Type } from 'class-transformer';

@InputType()
export class SubjectsOnSchoolsCreateManySubjectInputEnvelope {

    @Field(() => [SubjectsOnSchoolsCreateManySubjectInput], {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateManySubjectInput)
    data!: Array<SubjectsOnSchoolsCreateManySubjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
