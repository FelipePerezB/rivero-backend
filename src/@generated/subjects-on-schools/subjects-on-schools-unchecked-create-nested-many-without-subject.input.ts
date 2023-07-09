import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateWithoutSubjectInput } from './subjects-on-schools-create-without-subject.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput } from './subjects-on-schools-create-or-connect-without-subject.input';
import { SubjectsOnSchoolsCreateManySubjectInputEnvelope } from './subjects-on-schools-create-many-subject-input-envelope.input';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';

@InputType()
export class SubjectsOnSchoolsUncheckedCreateNestedManyWithoutSubjectInput {

    @Field(() => [SubjectsOnSchoolsCreateWithoutSubjectInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateWithoutSubjectInput)
    create?: Array<SubjectsOnSchoolsCreateWithoutSubjectInput>;

    @Field(() => [SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput>;

    @Field(() => SubjectsOnSchoolsCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateManySubjectInputEnvelope)
    createMany?: SubjectsOnSchoolsCreateManySubjectInputEnvelope;

    @Field(() => [SubjectsOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    connect?: Array<SubjectsOnSchoolsWhereUniqueInput>;
}
