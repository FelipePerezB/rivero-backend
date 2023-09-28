import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroupsService } from './groups.service';
import { Prisma } from '@prisma/client';
import { GroupCreateInput } from '../@generated/group/group-create.input';
import { GroupUpdateInput } from '../@generated/group/group-update.input';
import { GroupWhereInput } from '../@generated/group/group-where.input';
import { Group } from '../@generated/group/group.model';

@Resolver(() => Group)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation(() => Group)
  createGroup(@Args('createGroupInput') createGroupInput: GroupCreateInput) {
    return this.groupsService.create(
      createGroupInput as unknown as Prisma.GroupCreateInput,
    );
  }

  @Query(() => [Group], { name: 'groups' })
  findAll(@Args('where', { nullable: true }) where?: GroupWhereInput) {
    return this.groupsService.findAll({ where } as {
      where: Prisma.GroupWhereInput;
    });
  }

  @Query(() => Group, { name: 'group' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.findOne({ id });
  }

  @Mutation(() => Group)
  updateGroup(
    @Args('id') id: number,
    @Args('updateGroupInput') updateGroupInput: GroupUpdateInput,
  ) {
    return this.groupsService.update({
      where: { id },
      data: updateGroupInput as unknown as Prisma.GroupUpdateInput,
    });
  }

  @Mutation(() => Group)
  removeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.remove({ id });
  }
}
