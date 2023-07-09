import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GradesOnSchoolsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    gradeId?: true;

    @Field(() => Boolean, {nullable:true})
    schoolId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updateAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
