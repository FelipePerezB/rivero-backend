import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradesOnSchoolsWhereInput } from './grades-on-schools-where.input';
import { Type } from 'class-transformer';
import { GradesOnSchoolsOrderByWithRelationInput } from './grades-on-schools-order-by-with-relation.input';
import { GradesOnSchoolsWhereUniqueInput } from './grades-on-schools-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GradesOnSchoolsScalarFieldEnum } from './grades-on-schools-scalar-field.enum';

@ArgsType()
export class FindManyGradesOnSchoolsArgs {

    @Field(() => GradesOnSchoolsWhereInput, {nullable:true})
    @Type(() => GradesOnSchoolsWhereInput)
    where?: GradesOnSchoolsWhereInput;

    @Field(() => [GradesOnSchoolsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GradesOnSchoolsOrderByWithRelationInput>;

    @Field(() => GradesOnSchoolsWhereUniqueInput, {nullable:true})
    cursor?: GradesOnSchoolsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GradesOnSchoolsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GradesOnSchoolsScalarFieldEnum>;
}
