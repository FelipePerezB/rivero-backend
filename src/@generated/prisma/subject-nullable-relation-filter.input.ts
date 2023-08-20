import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereInput } from '../subject/subject-where.input';

@InputType()
export class SubjectNullableRelationFilter {

    @Field(() => SubjectWhereInput, {nullable:true})
    is?: SubjectWhereInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    isNot?: SubjectWhereInput;
}
