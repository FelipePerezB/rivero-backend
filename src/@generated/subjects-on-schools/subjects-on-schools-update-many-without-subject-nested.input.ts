import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectsOnSchoolsCreateWithoutSubjectInput } from './subjects-on-schools-create-without-subject.input';
import { Type } from 'class-transformer';
import { SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput } from './subjects-on-schools-create-or-connect-without-subject.input';
import { SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSubjectInput } from './subjects-on-schools-upsert-with-where-unique-without-subject.input';
import { SubjectsOnSchoolsCreateManySubjectInputEnvelope } from './subjects-on-schools-create-many-subject-input-envelope.input';
import { SubjectsOnSchoolsWhereUniqueInput } from './subjects-on-schools-where-unique.input';
import { SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSubjectInput } from './subjects-on-schools-update-with-where-unique-without-subject.input';
import { SubjectsOnSchoolsUpdateManyWithWhereWithoutSubjectInput } from './subjects-on-schools-update-many-with-where-without-subject.input';
import { SubjectsOnSchoolsScalarWhereInput } from './subjects-on-schools-scalar-where.input';

@InputType()
export class SubjectsOnSchoolsUpdateManyWithoutSubjectNestedInput {

    @Field(() => [SubjectsOnSchoolsCreateWithoutSubjectInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateWithoutSubjectInput)
    create?: Array<SubjectsOnSchoolsCreateWithoutSubjectInput>;

    @Field(() => [SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput)
    connectOrCreate?: Array<SubjectsOnSchoolsCreateOrConnectWithoutSubjectInput>;

    @Field(() => [SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSubjectInput)
    upsert?: Array<SubjectsOnSchoolsUpsertWithWhereUniqueWithoutSubjectInput>;

    @Field(() => SubjectsOnSchoolsCreateManySubjectInputEnvelope, {nullable:true})
    @Type(() => SubjectsOnSchoolsCreateManySubjectInputEnvelope)
    createMany?: SubjectsOnSchoolsCreateManySubjectInputEnvelope;

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

    @Field(() => [SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSubjectInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSubjectInput)
    update?: Array<SubjectsOnSchoolsUpdateWithWhereUniqueWithoutSubjectInput>;

    @Field(() => [SubjectsOnSchoolsUpdateManyWithWhereWithoutSubjectInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsUpdateManyWithWhereWithoutSubjectInput)
    updateMany?: Array<SubjectsOnSchoolsUpdateManyWithWhereWithoutSubjectInput>;

    @Field(() => [SubjectsOnSchoolsScalarWhereInput], {nullable:true})
    @Type(() => SubjectsOnSchoolsScalarWhereInput)
    deleteMany?: Array<SubjectsOnSchoolsScalarWhereInput>;
}
