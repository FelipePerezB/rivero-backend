import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GradesOnSchoolsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    gradeId?: true;

    @Field(() => Boolean, {nullable:true})
    schoolId?: true;
}
