import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DocsService } from './docs.service';
import { Doc } from '../@generated/doc/doc.model';
import { DocCreateInput } from '../@generated/doc/doc-create.input';
import { DocUpdateInput } from '../@generated/doc/doc-update.input';
import { Prisma } from '@prisma/client';
import { DocWhereInput } from '../@generated/doc/doc-where.input';
import { DocWhereUniqueInput } from 'src/@generated/doc/doc-where-unique.input';

@Resolver(() => Doc)
export class DocsResolver {
  constructor(private readonly docsService: DocsService) {}

  @Mutation(() => Doc)
  createDoc(@Args('createDocInput') createDocInput: DocCreateInput) {
    return this.docsService.create(createDocInput as Prisma.DocCreateInput);
  }

  @Query(() => [Doc], { name: 'docs' })
  findAll(@Args('where', { nullable: true }) where?: DocWhereInput) {
    return this.docsService.findAll({ where });
  }

  @Query(() => Doc, { name: 'doc' })
  findOne(@Args('where') where?: DocWhereUniqueInput) {
    return this.docsService.findOne(where as Prisma.DocWhereUniqueInput);
  }

  @Mutation(() => Doc)
  updateDoc(
    @Args('id') id: number,
    @Args('updateDocInput') updateDocInput: DocUpdateInput,
  ) {
    return this.docsService.update({
      where: { id },
      data: updateDocInput as unknown as Prisma.DocUpdateInput,
    });
  }

  @Mutation(() => Doc)
  removeDoc(@Args('id', { type: () => Int }) id: number) {
    return this.docsService.remove({ id });
  }
}
