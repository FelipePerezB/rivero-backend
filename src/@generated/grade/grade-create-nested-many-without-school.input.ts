import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeCreateWithoutSchoolInput } from './grade-create-without-school.input';
import { Type } from 'class-transformer';
import { GradeCreateOrConnectWithoutSchoolInput } from './grade-create-or-connect-without-school.input';
import { GradeCreateManySchoolInputEnvelope } from './grade-create-many-school-input-envelope.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';

@InputType()
export class GradeCreateNestedManyWithoutSchoolInput {

    @Field(() => [GradeCreateWithoutSchoolInput], {nullable:true})
    @Type(() => GradeCreateWithoutSchoolInput)
    create?: Array<GradeCreateWithoutSchoolInput>;

    @Field(() => [GradeCreateOrConnectWithoutSchoolInput], {nullable:true})
    @Type(() => GradeCreateOrConnectWithoutSchoolInput)
    connectOrCreate?: Array<GradeCreateOrConnectWithoutSchoolInput>;

    @Field(() => GradeCreateManySchoolInputEnvelope, {nullable:true})
    @Type(() => GradeCreateManySchoolInputEnvelope)
    createMany?: GradeCreateManySchoolInputEnvelope;

    @Field(() => [GradeWhereUniqueInput], {nullable:true})
    @Type(() => GradeWhereUniqueInput)
    connect?: Array<GradeWhereUniqueInput>;
}
