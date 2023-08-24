import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutSchoolsInput } from './grade-create-without-schools.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutSchoolsInput } from './grade-create-or-connect-without-schools.input';
import { GradeCreateManySchoolsInputEnvelope } from './grade-create-many-schools-input-envelope.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';

@InputType()
export class GradeUncheckedCreateNestedManyWithoutSchoolsInput {

    @Field(() => [GradeCreateWithoutSchoolsInput], {nullable:true})
    @Type(() => GradeCreateWithoutSchoolsInput)
    create?: Array<GradeCreateWithoutSchoolsInput>;

    @Field(() => [GradeCreateOrConnectWithoutSchoolsInput], {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutSchoolsInput)
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolsInput>;

    @Field(() => GradeCreateManySchoolsInputEnvelope, {nullable:true})
    @Type(() => GradeCreateManySchoolsInputEnvelope)
    createMany?: GradeCreateManySchoolsInputEnvelope;

    @Field(() => [GradeWhereUniqueInput], {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: Array<GradeWhereUniqueInput>;
}
