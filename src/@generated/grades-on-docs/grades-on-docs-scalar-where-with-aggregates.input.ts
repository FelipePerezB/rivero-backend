import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class GradesOnDocsScalarWhereWithAggregatesInput {

    @Field(() => [GradesOnDocsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GradesOnDocsScalarWhereWithAggregatesInput>;

    @Field(() => [GradesOnDocsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GradesOnDocsScalarWhereWithAggregatesInput>;

    @Field(() => [GradesOnDocsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GradesOnDocsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    docId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    gradeId?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
