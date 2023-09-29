import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereInput } from './subject-where.input';
import { Type } from 'class-transformer';
import { SubjectUpdateWithoutTopicsInput } from './subject-update-without-topics.input';

@InputType()
export class SubjectUpdateToOneWithWhereWithoutTopicsInput {

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    where?: SubjectWhereInput;

    @Field(() => SubjectUpdateWithoutTopicsInput, {nullable:false})
    @Type(() => SubjectUpdateWithoutTopicsInput)
    data!: SubjectUpdateWithoutTopicsInput;
}
