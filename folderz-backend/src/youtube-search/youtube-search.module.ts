import { Module } from '@nestjs/common';
import { YoutubeSearchController } from './youtube-search.controller';

@Module({
  controllers: [YoutubeSearchController]
})
export class YoutubeSearchModule {}
