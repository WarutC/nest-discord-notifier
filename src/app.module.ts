import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configuration } from '../config/configulation';
import { NotificationModule } from './notification/notification.module';
import { isInDocker } from './shared/utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      // If run on host use local env file else use config from NODE_ENV name
      envFilePath: `${process.cwd()}/config/env/${
        isInDocker() ? process.env.NODE_ENV : 'local'
      }.env`,
      isGlobal: true,
      load: [configuration],
    }),
    NotificationModule,
  ],
})
export class AppModule {}
