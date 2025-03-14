import {
  Controller,
  Post,
  Body,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  private readonly accessToken = this.config.get<string>('accessToken');

  constructor(
    private readonly config: ConfigService,
    private readonly notificationService: NotificationService,
  ) {}

  @Post('send')
  async sendNotification(
    @Body('message') message: string,
    @Headers('authorization') authHeader: string,
  ) {
    if (!authHeader || authHeader !== `Bearer ${this.accessToken}`) {
      throw new UnauthorizedException('Invalid or missing access token');
    }

    return this.notificationService.sendNotification(message);
  }
}
