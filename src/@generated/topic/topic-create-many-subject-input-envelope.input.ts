import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TopicCreateManySubjectInput } from './topic-create-many-subject.input';
import { Type } from 'class-transformer';

@InputType()
export class TopicCreateManySubjectInputEnvelope {

    @Field(() => [TopicCreateManySubjectInput], {nullable:false})
    @Type(() => TopicCreateManySubjectInput)
    data!: Array<TopicCreateManySubjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
