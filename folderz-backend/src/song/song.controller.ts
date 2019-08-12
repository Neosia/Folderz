import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { SongService } from './song.service';
import { async } from 'rxjs/internal/scheduler/async';
import { readdirSync } from 'fs';
import { SongDto } from './song.dto';
import { Song } from './song.entity';

@Controller('song')
export class SongController {
    constructor(private songService: SongService) { }

    @Post('/new')
    async addSong(@Res() res, @Body() song : Song){
        this.songService.addSong(song);
        return res.status(HttpStatus.OK).json({
            message: "Song has been created successfully"
        });
    }

    @Get('/all')
    async getAllSongs(@Res() res){
        const allSongs = this.songService.getAllSongs();
        return res.status(HttpStatus.OK).json(allSongs);
    }
}
