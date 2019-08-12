import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "folderz_db",
      "entities": ["src/**/**.entity{.ts,.js}"],
      "synchronize": true
    }),
    SongModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
