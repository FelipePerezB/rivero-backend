import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicScalarWhereInput } from './subtopic-scalar-where.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateManyMutationInput } from './subtopic-update-many-mutation.input';

@InputType()
export class SubtopicUpdateManyWithWhereWithoutTopicInput {

    @Field(() => SubtopicScalarWhereInput, {nullable:false})
    @Type(() => SubtopicScalarWhereInput)
    where!: SubtopicScalarWhereInput;

    @Field(() => SubtopicUpdateManyMutationInput, {nullable:false})
    @Type(() => SubtopicUpdateManyMutationInput)
    data!: SubtopicUpdateManyMutationInput;
}
