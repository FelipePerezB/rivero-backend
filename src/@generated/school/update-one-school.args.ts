import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SchoolUpdateInput } from './school-update.input';
import { Type } from 'class-transformer';
import { SchoolWhereUniqueInput } from './school-where-unique.input';

@ArgsType()
export class UpdateOneSchoolArgs {

    @Field(() => SchoolUpdateInput, {nullable:false})
    @Type(() => SchoolUpdateInput)
    data!: SchoolUpdateInput;

    @Field(() => SchoolWhereUniqueInput, {nullable:false})
    @Type(() => SchoolWhereUniqueInput)
    where!: SchoolWhereUniqueInput;
}
