import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateInput } from './file-create.input';
import { FileUpdateInput } from './file-update.input';

@ArgsType()
export class UpsertOneFileArgs {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateInput, {nullable:false})
    @Type(() => FileCreateInput)
    create!: FileCreateInput;

    @Field(() => FileUpdateInput, {nullable:false})
    @Type(() => FileUpdateInput)
    update!: FileUpdateInput;
}
