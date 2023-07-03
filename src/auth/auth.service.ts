import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '../users/users.service';
// import { PayloadToken } from './auth.model';
import { User } from 'src/user-entities/users/user.entity';
import { UsersService } from 'src/user-entities/users/users.service';
import { PayloadToken } from './auth.model';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Not allow');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;
    return this.genereateJWT(user);
  }

  genereateJWT(user: User) {
    const payload: PayloadToken = {
      role: user.role,
      sub: user.id,
    };
    return { token: this.jwtService.sign(payload), user };
  }

  async validateJwtPayload(payload: PayloadToken) {
    const user = await this.usersService.findOne(payload.sub);
    if (user) return user;

    return undefined;
  }
}
