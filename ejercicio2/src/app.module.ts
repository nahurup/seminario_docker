import * as mongoStore from 'cache-manager-mongodb';
import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [
    CacheModule.register({
      store: mongoStore,
      uri : "mongodb://root:root@mongo:27017"
    }),
  ],
  controllers: [AppController]
})
export class AppModule {}
