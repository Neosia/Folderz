import { Module } from '@nestjs/common';
import { SpotifyApiController } from './spotify-api.controller';

@Module({
  controllers: [SpotifyApiController]
})
export class SpotifyApiModule {}
