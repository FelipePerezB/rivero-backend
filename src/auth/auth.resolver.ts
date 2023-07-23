import { Resolver, Args, Query } from '@nestjs/graphql';
import { BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserInput } from './auth.dto';
import { User } from 'src/@generated/user/user.model';
// import { User } from 'src/user-entities/users/user.entity';

// type Login = {
//   user: User;
//   token: string;
// };

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User)
  async login(@Args('user') user: LoginUserInput) {
    const { password, email } = user;
    const result = await this.authService.validateUser(email, password);
    if (result) return result;
    throw new BadRequestException(
      'Could not log-in with the provided credentials',
    );
  }

  // There is no username guard here because if the person has the token, they can be any user
  // @Query(() => String)
  // async refreshToken(@Context('req') request: any): Promise<string> {
  //   const user: User = request.user;
  //   if (!user)
  //     throw new UnauthorizedException(
  //       'Could not log-in with the provided credentials',
  //     );
  //   const result = await this.authService.genereateJWT(user);
  //   if (result) return result.token;
  //   throw new UnauthorizedException(
  //     'Could not log-in with the provided credentials',
  //   );
  // }
}
