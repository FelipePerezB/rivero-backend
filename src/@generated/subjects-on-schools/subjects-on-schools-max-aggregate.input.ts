import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubjectsOnSchoolsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    subjectId?: true;

    @Field(() => Boolean, {nullable:true})
    schoolId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}
