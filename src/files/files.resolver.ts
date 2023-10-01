import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FilesService } from './files.service';
import { File } from '../generated/file/file.model';
import { FileCreateInput } from '../generated/file/file-create.input';
import { FileUpdateInput } from '../generated/file/file-update.input';
import { Prisma } from '@prisma/client';
import { FileWhereInput } from '../generated/file/file-where.input';
import { FileWhereUniqueInput } from '../generated/file/file-where-unique.input';

@Resolver(() => File)
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  @Mutation(() => File)
  createFile(@Args('createFileInput') createFileInput: FileCreateInput) {
    return this.filesService.create(createFileInput as Prisma.FileCreateInput);
  }

  @Query(() => [File], { name: 'files' })
  findAll(
    @Args('where', { nullable: true }) where?: FileWhereInput,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ) {
    return this.filesService.findAll({ where, skip, take } as {
      where: Prisma.FileWhereInput;
    });
  }

  @Query(() => File, { name: 'file' })
  findOne(@Args('where') where?: FileWhereUniqueInput) {
    return this.filesService.findOne(where as Prisma.FileWhereUniqueInput);
  }

  @Mutation(() => File)
  updateFile(
    @Args('id') id: number,
    @Args('updateFileInput') updateFileInput: FileUpdateInput,
  ) {
    return this.filesService.update({
      where: { id },
      data: updateFileInput as unknown as Prisma.FileUpdateInput,
    });
  }

  @Mutation(() => File)
  removeFile(@Args('id', { type: () => Int }) id: number) {
    return this.filesService.remove({ id });
  }

  @Mutation(() => File)
  upsertFile(
    @Args('where') where: FileWhereUniqueInput,
    @Args('create') create: FileCreateInput,
    @Args('update') update: FileUpdateInput,
  ) {
    return this.filesService.upsert(
      where as Prisma.FileWhereUniqueInput,
      create as Prisma.FileCreateInput,
      update as Prisma.FileUpdateInput,
    );
  }
}
