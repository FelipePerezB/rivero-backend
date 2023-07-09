import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicScalarWhereInput } from './topic-scalar-where.input';
import { Type } from 'class-transformer';
import { TopicUpdateManyMutationInput } from './topic-update-many-mutation.input';

@InputType()
export class TopicUpdateManyWithWhereWithoutSubjectInput {

    @Field(() => TopicScalarWhereInput, {nullable:false})
    @Type(() => TopicScalarWhereInput)
    where!: TopicScalarWhereInput;

    @Field(() => TopicUpdateManyMutationInput, {nullable:false})
    @Type(() => TopicUpdateManyMutationInput)
    data!: TopicUpdateManyMutationInput;
}
