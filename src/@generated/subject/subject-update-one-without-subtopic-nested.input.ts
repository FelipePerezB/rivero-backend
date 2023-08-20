import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubjectCreateWithoutSubtopicInput } from './subject-create-without-subtopic.input';
import { Type } from 'class-transformer';
import { SubjectCreateOrConnectWithoutSubtopicInput } from './subject-create-or-connect-without-subtopic.input';
import { SubjectUpsertWithoutSubtopicInput } from './subject-upsert-without-subtopic.input';
import { SubjectWhereInput } from './subject-where.input';
import { SubjectWhereUniqueInput } from './subject-where-unique.input';
import { SubjectUpdateToOneWithWhereWithoutSubtopicInput } from './subject-update-to-one-with-where-without-subtopic.input';

@InputType()
export class SubjectUpdateOneWithoutSubtopicNestedInput {

    @Field(() => SubjectCreateWithoutSubtopicInput, {nullable:true})
    @Type(() => SubjectCreateWithoutSubtopicInput)
    create?: SubjectCreateWithoutSubtopicInput;

    @Field(() => SubjectCreateOrConnectWithoutSubtopicInput, {nullable:true})
    @Type(() => SubjectCreateOrConnectWithoutSubtopicInput)
    connectOrCreate?: SubjectCreateOrConnectWithoutSubtopicInput;

    @Field(() => SubjectUpsertWithoutSubtopicInput, {nullable:true})
    @Type(() => SubjectUpsertWithoutSubtopicInput)
    upsert?: SubjectUpsertWithoutSubtopicInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    disconnect?: SubjectWhereInput;

    @Field(() => SubjectWhereInput, {nullable:true})
    @Type(() => SubjectWhereInput)
    delete?: SubjectWhereInput;

    @Field(() => SubjectWhereUniqueInput, {nullable:true})
    @Type(() => SubjectWhereUniqueInput)
    connect?: SubjectWhereUniqueInput;

    @Field(() => SubjectUpdateToOneWithWhereWithoutSubtopicInput, {nullable:true})
    @Type(() => SubjectUpdateToOneWithWhereWithoutSubtopicInput)
    update?: SubjectUpdateToOneWithWhereWithoutSubtopicInput;
}
