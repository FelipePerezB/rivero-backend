import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolWhereUniqueInput } from './school-where-unique.input';
import { Type } from 'class-transformer';
import { SchoolCreateInput } from './school-create.input';
import { SchoolUpdateInput } from './school-update.input';

@ArgsType()
export class UpsertOneSchoolArgs {

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: SchoolWhereUniqueInput;

    @Field(() => SchoolCreateInput, {nullable:false})
    @Type(() => SchoolCreateInput)
    create!: SchoolCreateInput;

    @Field(() => SchoolUpdateInput, {nullable:false})
    @Type(() => SchoolUpdateInput)
    update!: SchoolUpdateInput;
}
