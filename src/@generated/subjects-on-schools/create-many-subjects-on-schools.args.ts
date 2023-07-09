import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateManyInput } from './subjects-on-schools-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubjectsOnSchoolsArgs {

    @Field(() => [SubjectsOnSchoolsCreateManyInput], {nullable:false})
    @Type(() => SubjectsOnSchoolsCreateManyInput)
    data!: Array<SubjectsOnSchoolsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
