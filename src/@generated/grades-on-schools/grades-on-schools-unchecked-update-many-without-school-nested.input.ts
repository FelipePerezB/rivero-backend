import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnSchoolsCreateWithoutSchoolInput } from './grades-on-schools-create-without-school.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsCreateOrConnectWithoutSchoolInput } from './grades-on-schools-create-or-connect-without-school.input';
import { GradesOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput } from './grades-on-schools-upsert-with-where-unique-without-school.input';
import { GradesOnSchoolsCreateManySchoolInputEnvelope } from './grades-on-schools-create-many-school-input-envelope.input';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { GradesOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput } from './grades-on-schools-update-with-where-unique-without-school.input';
import { GradesOnSchoolsUpdateManyWithWhereWithoutSchoolInput } from './grades-on-schools-update-many-with-where-without-school.input';
import { GradesOnSchoolsScalarWhereInput } from './grades-on-schools-scalar-where.input';

@InputType()
export class GradesOnSchoolsUncheckedUpdateManyWithoutSchoolNestedInput {

    @Field(() => [GradesOnSchoolsCreateWithoutSchoolInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateWithoutSchoolInput)
    create?: Array<GradesOnSchoolsCreateWithoutSchoolInput>;

    @Field(() => [GradesOnSchoolsCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => GradesOnSchoolsCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<GradesOnSchoolsCreateOrConnectWithoutSchoolInput>;

    @Field(() => [GradesOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => GradesOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput)
    upsert?: Array<GradesOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput>;

    @Field(() => GradesOnSchoolsCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => GradesOnSchoolsCreateManySchoolInputEnvelope)
    createMany?: GradesOnSchoolsCreateManySchoolInputEnvelope;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    set?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    disconnect?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    delete?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnSchoolsWhereUniqueInput)
    connect?: Array<GradesOnSchoolsWhereUniqueInput>;

    @Field(() => [GradesOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => GradesOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput)
    update?: Array<GradesOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput>;

    @Field(() => [GradesOnSchoolsUpdateManyWithWhereWithoutSchoolInput], {nullable:true})
    @Type(() => GradesOnSchoolsUpdateManyWithWhereWithoutSchoolInput)
    updateMany?: Array<GradesOnSchoolsUpdateManyWithWhereWithoutSchoolInput>;

    @Field(() => [GradesOnSchoolsScalarWhereInput], {nullable:true})
    @Type(() => GradesOnSchoolsScalarWhereInput)
    deleteMany?: Array<GradesOnSchoolsScalarWhereInput>;
}
