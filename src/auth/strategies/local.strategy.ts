import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }
  validate(email: string, password: string) {
    const user = this.authService.validateUser(email, password);
    if (!user) throw new UnauthorizedException('Not allow');
    return user;
  }
}

export default LocalStrategy;
