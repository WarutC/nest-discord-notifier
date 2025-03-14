import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class NotificationService {
  private readonly webhookUrl = this.config.get<string>('discord.webhookUrl');

  constructor(private readonly config: ConfigService) {}

  async sendNotification(message: string): Promise<string> {
    try {
      const response = await axios.post(this.webhookUrl, { content: message });

      if (response.status === 204) {
        return 'Notification sent successfully!';
      }

      throw new HttpException(
        'Failed to send notification',
        HttpStatus.BAD_REQUEST,
      );
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
