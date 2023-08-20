import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicUpdateWithoutDocInput } from './subtopic-update-without-doc.input';
import { Type } from 'class-transformer';
import { SubtopicCreateWithoutDocInput } from './subtopic-create-without-doc.input';
import { SubtopicWhereInput } from './subtopic-where.input';

@InputType()
export class SubtopicUpsertWithoutDocInput {

    @Field(() => SubtopicUpdateWithoutDocInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutDocInput)
    update!: SubtopicUpdateWithoutDocInput;

    @Field(() => SubtopicCreateWithoutDocInput, {nullable:false})
    @Type(() => SubtopicCreateWithoutDocInput)
    create!: SubtopicCreateWithoutDocInput;

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;
}
