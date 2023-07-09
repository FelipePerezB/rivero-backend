import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateWithoutSchoolInput } from './subjects-on-schools-create-without-school.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput } from './subjects-on-schools-create-or-connect-without-school.input';
import { SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput } from './subjects-on-schools-upsert-with-where-unique-without-school.input';
import { SubjectsOnSchoolsCreateManySchoolInputEnvelope } from './subjects-on-schools-create-many-school-input-envelope.input';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput } from './subjects-on-schools-update-with-where-unique-without-school.input';
import { SubjectsOnSchoolsUpdateManyWithWhereWithoutSchoolInput } from './subjects-on-schools-update-many-with-where-without-school.input';
import { SubjectsOnSchoolsScalarWhereInput } from './subjects-on-schools-scalar-where.input';

@InputType()
export class SubjectsOnSchoolsUncheckedUpdateManyWithoutSchoolNestedInput {

    @Field(() => [SubjectsOnSchoolsCreateWithoutSchoolInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateWithoutSchoolInput)
    create?: Array<SubjectsOnSchoolsCreateWithoutSchoolInput>;

    @Field(() => [SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<SubjectsOnSchoolsCreateOrConnectWithoutSchoolInput>;

    @Field(() => [SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput)
    upsert?: Array<SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSchoolInput>;

    @Field(() => SubjectsOnSchoolsCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateManySchoolInputEnvelope)
    createMany?: SubjectsOnSchoolsCreateManySchoolInputEnvelope;

    @Field(() => [SubjectsOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    set?: Array<SubjectsOnSchoolsWhereUniqueInput>;

    @Field(() => [SubjectsOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    disconnect?: Array<SubjectsOnSchoolsWhereUniqueInput>;

    @Field(() => [SubjectsOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    delete?: Array<SubjectsOnSchoolsWhereUniqueInput>;

    @Field(() => [SubjectsOnSchoolsWhereUniqueInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsWhereUniqueInput)
    connect?: Array<SubjectsOnSchoolsWhereUniqueInput>;

    @Field(() => [SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput)
    update?: Array<SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSchoolInput>;

    @Field(() => [SubjectsOnSchoolsUpdateManyWithWhereWithoutSchoolInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsUpdateManyWithWhereWithoutSchoolInput)
    updateMany?: Array<SubjectsOnSchoolsUpdateManyWithWhereWithoutSchoolInput>;

    @Field(() => [SubjectsOnSchoolsScalarWhereInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsScalarWhereInput)
    deleteMany?: Array<SubjectsOnSchoolsScalarWhereInput>;
}
