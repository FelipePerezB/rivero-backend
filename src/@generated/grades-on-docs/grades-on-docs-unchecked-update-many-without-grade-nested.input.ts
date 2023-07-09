import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsCreateWithoutGradeInput } from './grades-on-docs-create-without-grade.input';
import { Type } from 'class-transformer';
import { GradesOnDocsCreateOrConnectWithoutGradeInput } from './grades-on-docs-create-or-connect-without-grade.input';
import { GradesOnDocsUpsertWithWhereUniqueWithoutGradeInput } from './grades-on-docs-upsert-with-where-unique-without-grade.input';
import { GradesOnDocsCreateManyGradeInputEnvelope } from './grades-on-docs-create-many-grade-input-envelope.input';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';
import { GradesOnDocsUpdateWithWhereUniqueWithoutGradeInput } from './grades-on-docs-update-with-where-unique-without-grade.input';
import { GradesOnDocsUpdateManyWithWhereWithoutGradeInput } from './grades-on-docs-update-many-with-where-without-grade.input';
import { GradesOnDocsScalarWhereInput } from './grades-on-docs-scalar-where.input';

@InputType()
export class GradesOnDocsUncheckedUpdateManyWithoutGradeNestedInput {

    @Field(() => [GradesOnDocsCreateWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnDocsCreateWithoutGradeInput)
    create?: Array<GradesOnDocsCreateWithoutGradeInput>;

    @Field(() => [GradesOnDocsCreateOrConnectWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnDocsCreateOrConnectWithoutGradeInput)
    connectOrCreate?: Array<GradesOnDocsCreateOrConnectWithoutGradeInput>;

    @Field(() => [GradesOnDocsUpsertWithWhereUniqueWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnDocsUpsertWithWhereUniqueWithoutGradeInput)
    upsert?: Array<GradesOnDocsUpsertWithWhereUniqueWithoutGradeInput>;

    @Field(() => GradesOnDocsCreateManyGradeInputEnvelope, {nullable:true})
    @Type(() => GradesOnDocsCreateManyGradeInputEnvelope)
    createMany?: GradesOnDocsCreateManyGradeInputEnvelope;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    set?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    disconnect?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    delete?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    connect?: Array<GradesOnDocsWhereUniqueInput>;

    @Field(() => [GradesOnDocsUpdateWithWhereUniqueWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnDocsUpdateWithWhereUniqueWithoutGradeInput)
    update?: Array<GradesOnDocsUpdateWithWhereUniqueWithoutGradeInput>;

    @Field(() => [GradesOnDocsUpdateManyWithWhereWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnDocsUpdateManyWithWhereWithoutGradeInput)
    updateMany?: Array<GradesOnDocsUpdateManyWithWhereWithoutGradeInput>;

    @Field(() => [GradesOnDocsScalarWhereInput], {nullable:true})
    @Type(() => GradesOnDocsScalarWhereInput)
    deleteMany?: Array<GradesOnDocsScalarWhereInput>;
}
