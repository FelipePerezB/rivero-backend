import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateWithoutSchoolInput } from './subjects-on-schools-create-without-school.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput } from './subjects-on-schools-create-or-connect-without-school.input';
import { SubjectsOnSchoolsCreateManySchoolInputEnvelope } from './subjects-on-schools-create-many-school-input-envelope.input';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';

@InputType()
export class SubjectsOnSchoolsCreateNestedManyWithoutSchoolInput {

    @Field(() => [SubjectsOnSchoolsCreateWithoutSchoolInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateWithoutSchoolInput)
    create?: Array<SubjectsOnSchoolsCreateWithoutSchoolInput>;

    @Field(() => [SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput>;

    @Field(() => SubjectsOnSchoolsCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateManySchoolInputEnvelope)
    createMany?: SubjectsOnSchoolsCreateManySchoolInputEnvelope;

    @Field(() => [SubjectsOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    connect?: Array<SubjectsOnSchoolsWhereUniqueInput>;
}
