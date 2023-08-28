import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '../users/users.service';
// import { PayloadToken } from './auth.model';
// import { User } from 'src/user-entities/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { PayloadToken } from './auth.model';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

@Injectable()
export class AuthService {
  constructor(
    @Inject(config.KEY)
    private configService: ConfigType<typeof config>,
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly httpService: HttpService,
  ) {}

  // async validateUser(email: string, password: string) {
  //   const user = await this.usersService.findByEmail(email);
  //   if (!user) throw new UnauthorizedException('Not allow');
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) return null;
  //   return user;
  //   // return this.genereateJWT(user);
  // }

  async sendInvitation({
    email,
    gradeId,
    schoolId,
    role,
  }: {
    email: string;
    gradeId?: string | number;
    schoolId: string | number;
    role: 'ADMIN' | 'TEACHER' | 'STUDENT';
  }): Promise<AxiosResponse<any>> {
    const clerkApiKey = this.configService.clerk.api_key_backend;
    const { data } = await this.httpService.axiosRef.post(
      'https://api.clerk.com/v1/invitations',
      {
        email_address: email,
        redirect_url: 'https://rivero.vercel.app/sign-up',
        public_metadata: {
          role,
          schoolId,
          gradeId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${clerkApiKey}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return data;
  }

  genereateJWT(user: any) {
    const payload: PayloadToken = {
      role: user.role,
      sub: user.id,
    };
    return { token: this.jwtService.sign(payload), user };
  }

  async validateJwtPayload(payload: PayloadToken) {
    const user = await this.usersService.findOne({ id: payload.sub });
    if (user) return user;

    return undefined;
  }
}
