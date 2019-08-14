import { Controller, Post, Res, Body, HttpStatus, Get, Param } from '@nestjs/common';
import { SongService } from './song.service';
import { SongDto } from './song.dto';
import { plainToClass, classToPlain, serialize } from "class-transformer";
import { get } from 'https';


@Controller('song')
export class SongController {
    constructor(private songService: SongService) { }

    @Post('new')
    async addSong(@Res() res, @Body() newSong : SongDto){
        let createdSong = await this.songService.addSong(newSong);
        return res.status(HttpStatus.OK).json({
            message: "Song has been created successfully",
            createdSong
        });
    }

    @Get('all')
    async getAllSongs(@Res() res){
        let allSongs = await this.songService.getAllSongs();
        return res.status(HttpStatus.OK).json(allSongs);
    }

    @Get('get/:id')
    async getSong(@Res() res, @Param() params) {
        let song = await this.songService.getSong(params.id);
        return res.status(HttpStatus.OK).json(song);
    }
}
