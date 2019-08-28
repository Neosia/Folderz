import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { YoutubeSearchModule } from './youtube-search/youtube-search.module';
import { SpotifyApiModule } from './spotify-api/spotify-api.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "password",
      "database": "folderz_db",
      "entities": ["src/**/**.entity{.ts,.js}"],
      "synchronize": true
    }),
    SongModule,
    YoutubeSearchModule,
    SpotifyApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
