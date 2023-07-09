import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Doc } from '../doc/doc.model';
import { Grade } from '../grade/grade.model';

@ObjectType()
export class GradesOnDocs {

    @Field(() => Int, {nullable:false})
    docId!: number;

    @Field(() => Int, {nullable:false})
    gradeId!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Doc, {nullable:false})
    doc?: Doc;

    @Field(() => Grade, {nullable:false})
    grade?: Grade;
}
