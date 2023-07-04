import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import config from '../config';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import LocalStrategy from './strategies/local.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => ({
        secret: configService.jwt.secret,
        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
})
export class AuthModule {}
