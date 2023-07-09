import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradesOnDocsCreateWithoutGradeInput } from './grades-on-docs-create-without-grade.input';
import { Type } from 'class-transformer';
import { GradesOnDocsCreateOrConnectWithoutGradeInput } from './grades-on-docs-create-or-connect-without-grade.input';
import { GradesOnDocsCreateManyGradeInputEnvelope } from './grades-on-docs-create-many-grade-input-envelope.input';
import { GradesOnDocsWhereUniqueInput } from './grades-on-docs-where-unique.input';

@InputType()
export class GradesOnDocsUncheckedCreateNestedManyWithoutGradeInput {

    @Field(() => [GradesOnDocsCreateWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnDocsCreateWithoutGradeInput)
    create?: Array<GradesOnDocsCreateWithoutGradeInput>;

    @Field(() => [GradesOnDocsCreateOrConnectWithoutGradeInput], {nullable:true})
    @Type(() => GradesOnDocsCreateOrConnectWithoutGradeInput)
    connectOrCreate?: Array<GradesOnDocsCreateOrConnectWithoutGradeInput>;

    @Field(() => GradesOnDocsCreateManyGradeInputEnvelope, {nullable:true})
    @Type(() => GradesOnDocsCreateManyGradeInputEnvelope)
    createMany?: GradesOnDocsCreateManyGradeInputEnvelope;

    @Field(() => [GradesOnDocsWhereUniqueInput], {nullable:true})
    @Type(() => GradesOnDocsWhereUniqueInput)
    connect?: Array<GradesOnDocsWhereUniqueInput>;
}
