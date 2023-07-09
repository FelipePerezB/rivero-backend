import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateManyInput } from './grades-on-schools-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGradesOnSchoolsArgs {

    @Field(() => [GradesOnSchoolsCreateManyInput], {nullable:false})
    @Type(() => GradesOnSchoolsCreateManyInput)
    data!: Array<GradesOnSchoolsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
