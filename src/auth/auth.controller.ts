import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('sendInvitation')
  async sendInvitation(
    @Body()
    InvitationData: {
      email: string;
      gradeId: string;
      schoolId: string;
      role: 'TEACHER' | 'STUDENT' | 'ADMIN';
    },
  ): Promise<any> {
    return this.authService.sendInvitation(InvitationData);
  }
}
