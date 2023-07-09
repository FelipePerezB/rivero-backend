import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';
import { Type } from 'class-transformer';
import { GradeOrderByWithRelationInput } from './grade-order-by-with-relation.input';
import { GradeWhereUniqueInput } from './grade-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GradeScalarFieldEnum } from './grade-scalar-field.enum';

@ArgsType()
export class FindFirstGradeArgs {

    @Field(() => GradeWhereInput, {nullable:true})
    @Type(() => GradeWhereInput)
    where?: GradeWhereInput;

    @Field(() => [GradeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GradeOrderByWithRelationInput>;

    @Field(() => GradeWhereUniqueInput, {nullable:true})
    cursor?: GradeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GradeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GradeScalarFieldEnum>;
}
