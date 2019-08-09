import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { CreateSongDTO } from './dto/song.dto';
import { SongService } from './song.service';
import { async } from 'rxjs/internal/scheduler/async';
import { readdirSync } from 'fs';

@Controller('song')
export class SongController {
    constructor(private songService: SongService) { }

    @Post('/new')
    async addSong(@Res() res, @Body() songDto : CreateSongDTO){
        const song = this.songService.addSong(songDto);
        return res.status(HttpStatus.OK).json({
            message: "Song has been created successfully",
            song
        });
    }

    @Get('/all')
    async getAllSongs(@Res() res){
        const allSongs = this.songService.getAllSongs();
        return res.status(HttpStatus.OK).json(allSongs);
    }
}
