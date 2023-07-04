import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import config from '../../config';
import { AuthService } from '../auth.service';
// import { PayloadToken } from '../auth.model';
// import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(config.KEY) readonly configService: ConfigType<typeof config>,
    private readonly _authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwt.secret,
    });
  }

  // async validate(payload) {
  //   const user = await this._authService.validateJwtPayload(payload);
  //   if (!user)
  //     throw new UnauthorizedException(
  //       'Could not log-in with the provided credentials',
  //     );
  //   return user;
  // }
}
