import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsScalarWhereInput } from './subjects-on-schools-scalar-where.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsUpdateManyMutationInput } from './subjects-on-schools-update-many-mutation.input';

@InputType()
export class SubjectsOnSchoolsUpdateManyWithWhereWithoutSubjectInput {

    @Field(() => SubjectsOnSchoolsScalarWhereInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsScalarWhereInput)
    where!: SubjectsOnSchoolsScalarWhereInput;

    @Field(() => SubjectsOnSchoolsUpdateManyMutationInput, {nullable:false})
    @Type(() => SubjectsOnSchoolsUpdateManyMutationInput)
    data!: SubjectsOnSchoolsUpdateManyMutationInput;
}
