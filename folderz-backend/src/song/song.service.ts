import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from './interfaces/song.interface';
import { CreateSongDTO } from './dto/song.dto';

@Injectable()
export class SongService {
    constructor(@InjectModel('Song') private readonly songModel: Model<Song>) { }

    async addSong(songDto: CreateSongDTO) : Promise<Song> {
        const newSong = new this.songModel(songDto);
        return newSong.save();
    }

    async getAllSongs() : Promise<Song[]>{
        const allSongs = await this.songModel.find().exec();
        return allSongs;
    }
}
