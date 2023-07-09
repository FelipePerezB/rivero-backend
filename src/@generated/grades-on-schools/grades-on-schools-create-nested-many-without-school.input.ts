import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateWithoutSchoolInput } from './grades-on-schools-create-without-school.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsCreateOrConnectWithoutSchoolInput } from './grades-on-schools-create-or-connect-without-school.input';
import { GradesOnSchoolsCreateManySchoolInputEnvelope } from './grades-on-schools-create-many-school-input-envelope.input';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';

@InputType()
export class GradesOnSchoolsCreateNestedManyWithoutSchoolInput {

    @Field(() => [GradesOnSchoolsCreateWithoutSchoolInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateWithoutSchoolInput)
    create?: Array<GradesOnSchoolsCreateWithoutSchoolInput>;

    @Field(() => [GradesOnSchoolsCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<GradesOnSchoolsCreateOrConnectWithoutSchoolInput>;

    @Field(() => GradesOnSchoolsCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => GradesOnSchoolsCreateManySchoolInputEnvelope)
    createMany?: GradesOnSchoolsCreateManySchoolInputEnvelope;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    connect?: Array<GradesOnSchoolsWhereUniqueInput>;
}
