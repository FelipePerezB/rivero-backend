import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubjectsOnSchoolsUpdateManyMutationInput } from './subjects-on-schools-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsWhereInput } from './subjects-on-schools-where.input';

@ArgsType()
export class UpdateManySubjectsOnSchoolsArgs {

    @Field(() => SubjectsOnSchoolsUpdateManyMutationInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateManyMutationInput)
    data!: SubjectsOnSchoolsUpdateManyMutationInput;

    @Field(() => SubjectsOnSchoolsWhereInput, {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereInput)
    where?: SubjectsOnSchoolsWhereInput;
}
