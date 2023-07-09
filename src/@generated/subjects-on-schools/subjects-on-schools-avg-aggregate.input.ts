import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubjectsOnSchoolsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    subjectId?: true;

    @Field(() => Boolean, {nullable:true})
    schoolId?: true;
}
