// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { UsersService } from './users.service';
// import { User } from './user.entity';
// import { CreateUserInput, UpdateUserInput } from './user.input';
// // import { UseGuards } from '@nestjs/common';
// // import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

// @Resolver(() => User)
// export class UsersResolver {
//   constructor(private readonly usersService: UsersService) {}

//   @Mutation(() => User)
//   createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
//     return this.usersService.create(createUserInput);
//   }

//   @Query(() => [User])
//   stars() {
//     return this.usersService.scores();
//   }

//   // @UseGuards(JwtAuthGuard)
//   @Query(() => [User], { name: 'users' })
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Query(() => User, { name: 'user' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.usersService.findOne(id);
//   }

//   @Mutation(() => User)
//   updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
//     return this.usersService.update(updateUserInput.id, updateUserInput);
//   }

//   @Mutation(() => User)
//   removeUser(@Args('id', { type: () => Int }) id: number) {
//     return this.usersService.remove(id);
//   }
// }