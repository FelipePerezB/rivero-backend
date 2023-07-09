import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GradesOnDocsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    docId?: true;

    @Field(() => Boolean, {nullable:true})
    gradeId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updateAt?: true;
}
