import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicCreateManySubjectInput } from './subtopic-create-many-subject.input';
import { Type } from 'class-transformer';

@InputType()
export class SubtopicCreateManySubjectInputEnvelope {

    @Field(() => [SubtopicCreateManySubjectInput], {nullable:false})
    @Type(() => SubtopicCreateManySubjectInput)
    data!: Array<SubtopicCreateManySubjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
