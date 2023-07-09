import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GradesOnDocsAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    docId?: true;

    @Field(() => Boolean, {nullable:true})
    gradeId?: true;
}
