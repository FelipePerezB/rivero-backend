import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GradeWhereInput } from './grade-where.input';

@InputType()
export class GradeRelationFilter {

    @Field(() => GradeWhereInput, {nullable:true})
    is?: GradeWhereInput;

    @Field(() => GradeWhereInput, {nullable:true})
    isNot?: GradeWhereInput;
}
