import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubtopicUpdateManyMutationInput } from './subtopic-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubtopicWhereInput } from './subtopic-where.input';

@ArgsType()
export class UpdateManySubtopicArgs {

    @Field(() => SubtopicUpdateManyMutationInput, {nullable:false})
    @Type(() => SubtopicUpdateManyMutationInput)
    data!: SubtopicUpdateManyMutationInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;
}
