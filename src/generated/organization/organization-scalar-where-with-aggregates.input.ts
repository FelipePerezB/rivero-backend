import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class OrganizationScalarWhereWithAggregatesInput {

    @Field(() => [OrganizationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrganizationScalarWhereWithAggregatesInput>;

    @Field(() => [OrganizationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrganizationScalarWhereWithAggregatesInput>;

    @Field(() => [OrganizationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrganizationScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updateAt?: DateTimeNullableWithAggregatesFilter;
}
