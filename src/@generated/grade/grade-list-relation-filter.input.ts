import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';

@InputType()
export class GradeListRelationFilter {

    @Field(() => GradeWhereInput, {nullable:true})
    every?: GradeWhereInput;

    @Field(() => GradeWhereInput, {nullable:true})
    some?: GradeWhereInput;

    @Field(() => GradeWhereInput, {nullable:true})
    none?: GradeWhereInput;
}
