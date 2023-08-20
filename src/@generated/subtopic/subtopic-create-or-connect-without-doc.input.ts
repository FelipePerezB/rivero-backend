import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereUniqueInput } from './subtopic-where-unique.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutDocInput } from './subtopic-create-without-doc.input';

@InputType()
export class SubtopicCreateOrConnectWithoutDocInput {

    @Field(() => SubtopicWhereUniqueInput, {nullable:false})
    @Type(() => SubtopicWhereUniqueInput)
    where!: SubtopicWhereUniqueInput;

    @Field(() => SubtopicCreateWithoutDocInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutDocInput)
    create!: SubtopicCreateWithoutDocInput;
}
