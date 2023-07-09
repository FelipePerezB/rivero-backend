import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class GradesOnDocsScalarWhereInput {

    @Field(() => [GradesOnDocsScalarWhereInput], {nullable:true})
    AND?: Array<GradesOnDocsScalarWhereInput>;

    @Field(() => [GradesOnDocsScalarWhereInput], {nullable:true})
    OR?: Array<GradesOnDocsScalarWhereInput>;

    @Field(() => [GradesOnDocsScalarWhereInput], {nullable:true})
    NOT?: Array<GradesOnDocsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    docId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    gradeId?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;
}
