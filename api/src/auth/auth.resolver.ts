import { Resolver, Args, Query, Context } from '@nestjs/graphql';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginResult, LoginUserInput } from './auth.dto';
import { User } from 'api/src/user-entities/users/user.entity';

// type Login = {
//   user: User;
//   token: string;
// };

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => LoginResult)
  async login(@Args('user') user: LoginUserInput) {
    const { password, email } = user;
    const result = await this.authService.validateUser(email, password);
    if (result) return result;
    throw new BadRequestException(
      'Could not log-in with the provided credentials',
    );
  }

  // There is no username guard here because if the person has the token, they can be any user
  @Query(() => String)
  async refreshToken(@Context('req') request: any): Promise<string> {
    const user: User = request.user;
    if (!user)
      throw new UnauthorizedException(
        'Could not log-in with the provided credentials',
      );
    const result = await this.authService.genereateJWT(user);
    if (result) return result.token;
    throw new UnauthorizedException(
      'Could not log-in with the provided credentials',
    );
  }
}
