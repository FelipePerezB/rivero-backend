import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class GradesOnDocsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    docId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gradeId?: keyof typeof SortOrder;
}
