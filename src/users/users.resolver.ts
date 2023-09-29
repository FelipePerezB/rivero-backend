import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../generated/user/user.model';
import { UserCreateInput } from '../generated/user/user-create.input';
import { UserUpdateInput } from '../generated/user/user-update.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from '../generated/user/user-where-unique.input';
import { UserWhereInput } from '../generated/user/user-where.input';
// import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.usersService.create(createUserInput as Prisma.UserCreateInput);
  }

  // @UseGuards(JwtAuthGuard)
  @Query(() => [User], { name: 'users' })
  findAll(@Args('where', { nullable: true }) where?: UserWhereInput) {
    return this.usersService.findAll({ where } as {
      where: Prisma.UserWhereInput;
    });
  }

  @Query(() => User, { name: 'userByEmail' })
  findByEmail(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findByEmail(email);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.findOne(
      where as unknown as Prisma.UserWhereUniqueInput,
    );
  }

  @Mutation(() => User)
  updateUser(
    @Args('where') where: UserWhereUniqueInput,
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ) {
    return this.usersService.update({
      where: where as Prisma.UserWhereUniqueInput,
      data: updateUserInput as unknown as Prisma.UserUpdateInput,
    });
  }

  @Mutation(() => User)
  removeUser(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.remove(where as Prisma.UserWhereUniqueInput);
  }
}
