import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
// import { User } from './user.entity';
// import { CreateUserInput, UpdateUserInput } from './user.input';
import { User } from '../@generated/user/user.model';
import { UserCreateInput } from '../@generated/user/user-create.input';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { Prisma } from '@prisma/client';
// import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.usersService.create(createUserInput as Prisma.UserCreateInput);
  }

  @Query(() => [User])
  stars() {
    return this.usersService.scores();
  }

  // @UseGuards(JwtAuthGuard)
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll({});
  }

  @Query(() => User, { name: 'userByEmail' })
  findByEmail(@Args('email', { type: () => String }) email: string) {
    return this.usersService.findByEmail(email);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne({ id });
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: number,
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ) {
    return this.usersService.update({
      where: { id },
      data: updateUserInput as unknown as Prisma.UserUpdateInput,
    });
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove({ id });
  }
}
