import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DocsService } from './docs.service';
import { Doc } from './docs.entity';
import { CreateDocInput } from './create-doc.input';
import { UpdateDocInput } from './update-doc.input';

@Resolver(() => Doc)
export class DocsResolver {
  constructor(private readonly docsService: DocsService) {}

  @Mutation(() => Doc)
  createDoc(@Args('createDocInput') createDocInput: CreateDocInput) {
    return this.docsService.create(createDocInput);
  }

  @Query(() => [Doc], { name: 'docs' })
  findAll() {
    return this.docsService.findAll();
  }

  @Query(() => Doc, { name: 'doc' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.docsService.findOne(id);
  }

  @Mutation(() => Doc)
  updateDoc(@Args('updateDocInput') updateDocInput: UpdateDocInput) {
    return this.docsService.update(updateDocInput.id, updateDocInput);
  }

  @Mutation(() => Doc)
  removeDoc(@Args('id', { type: () => Int }) id: number) {
    return this.docsService.remove(id);
  }
}
