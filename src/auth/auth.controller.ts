import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Role } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('sendInvitation')
  async sendInvitation(
    @Body()
    InvitationData: {
      email: string;
      gorups: string[];
      organizationId: string;
      role: Role;
    },
  ): Promise<any> {
    return this.authService.sendInvitation(InvitationData);
  }
}
