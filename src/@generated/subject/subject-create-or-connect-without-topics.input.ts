import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { Type } from 'class-transformer';
import { SubjectCreateWithoutTopicsInput } from './subject-create-without-topics.input';

@InputType()
export class SubjectCreateOrConnectWithoutTopicsInput {

    @Field(() => SubjectWhereUniqueInput, {nullable:false})
    @Type(() => SubjectWhereUniqueInput)
    where!: SubjectWhereUniqueInput;

    @Field(() => SubjectCreateWithoutTopicsInput, {nullable:false})
    @Type(() => SubjectCreateWithoutTopicsInput)
    create!: SubjectCreateWithoutTopicsInput;
}
