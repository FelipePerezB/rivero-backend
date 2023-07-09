import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TopicCreateManyInput } from './topic-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTopicArgs {

    @Field(() => [TopicCreateManyInput], {nullable:false})
    @Type(() => TopicCreateManyInput)
    data!: Array<TopicCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
