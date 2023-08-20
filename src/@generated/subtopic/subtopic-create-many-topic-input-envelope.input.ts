import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateManyTopicInput } from './subtopic-create-many-topic.input';
import { Type } from 'class-transformer';

@InputType()
export class SubtopicCreateManyTopicInputEnvelope {

    @Field(() => [SubtopicCreateManyTopicInput], {nullable:false})
    @Type(() => SubtopicCreateManyTopicInput)
    data!: Array<SubtopicCreateManyTopicInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
