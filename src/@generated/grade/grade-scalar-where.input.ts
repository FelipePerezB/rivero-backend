import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class GradeScalarWhereInput {

    @Field(() => [GradeScalarWhereInput], {nullable:true})
    AND?: Array<GradeScalarWhereInput>;

    @Field(() => [GradeScalarWhereInput], {nullable:true})
    OR?: Array<GradeScalarWhereInput>;

    @Field(() => [GradeScalarWhereInput], {nullable:true})
    NOT?: Array<GradeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    schoolId?: IntFilter;
}
