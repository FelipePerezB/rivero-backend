import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubtopicWhereInput } from './subtopic-where.input';
import { Type } from 'class-transformer';
import { SubtopicUpdateWithoutDocInput } from './subtopic-update-without-doc.input';

@InputType()
export class SubtopicUpdateToOneWithWhereWithoutDocInput {

    @Field(() => SubtopicWhereInput, {nullable:true})
    @Type(() => SubtopicWhereInput)
    where?: SubtopicWhereInput;

    @Field(() => SubtopicUpdateWithoutDocInput, {nullable:false})
    @Type(() => SubtopicUpdateWithoutDocInput)
    data!: SubtopicUpdateWithoutDocInput;
}
