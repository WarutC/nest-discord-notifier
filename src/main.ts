import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Import ConfigService
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { isInDocker } from './shared/utils';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService); // Get ConfigService instance

  const port = configService.get<number>('PORT');
  await app.listen(port);
  const nodeEnv = configService.get<string>('NODE_ENV');

  Logger.log(
    `🚀 Simple discord notificatoin Service is running in ${
      isInDocker() ? 'docker' : 'local'
    } mode on port ${port} in ${nodeEnv} environment`,
    'Bootstrap',
  );
}
bootstrap();
