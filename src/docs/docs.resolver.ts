import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DocsService } from './docs.service';
import { Doc } from 'src/@generated/doc/doc.model';
import { DocCreateInput } from 'src/@generated/doc/doc-create.input';
import { DocUpdateInput } from 'src/@generated/doc/doc-update.input';
import { Prisma } from '@prisma/client';

@Resolver(() => Doc)
export class DocsResolver {
  constructor(private readonly docsService: DocsService) {}

  @Mutation(() => Doc)
  createDoc(@Args('createDocInput') createDocInput: DocCreateInput) {
    return this.docsService.create(createDocInput as Prisma.DocCreateInput);
  }

  @Query(() => [Doc], { name: 'docs' })
  findAll() {
    return this.docsService.findAll({});
  }

  @Query(() => Doc, { name: 'doc' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.docsService.findOne({ id });
  }

  @Mutation(() => Doc)
  updateDoc(
    @Args('id') id: number,
    @Args('updateDocInput') updateDocInput: DocCreateInput,
  ) {
    return this.docsService.update({
      where: { id },
      data: updateDocInput as Prisma.DocUpdateInput,
    });
  }

  @Mutation(() => Doc)
  removeDoc(@Args('id', { type: () => Int }) id: number) {
    return this.docsService.remove({ id });
  }
}
