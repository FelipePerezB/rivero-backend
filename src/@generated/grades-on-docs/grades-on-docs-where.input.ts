import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DocRelationFilter } from '../doc/doc-relation-filter.input';
import { GradeRelationFilter } from '../grade/grade-relation-filter.input';

@InputType()
export class GradesOnDocsWhereInput {

    @Field(() => [GradesOnDocsWhereInput], {nullable:true})
    AND?: Array<GradesOnDocsWhereInput>;

    @Field(() => [GradesOnDocsWhereInput], {nullable:true})
    OR?: Array<GradesOnDocsWhereInput>;

    @Field(() => [GradesOnDocsWhereInput], {nullable:true})
    NOT?: Array<GradesOnDocsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    docId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    gradeId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => DocRelationFilter, {nullable:true})
    doc?: DocRelationFilter;

    @Field(() => GradeRelationFilter, {nullable:true})
    grade?: GradeRelationFilter;
}
