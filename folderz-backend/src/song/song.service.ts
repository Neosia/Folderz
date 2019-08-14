import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';
import { SongDto } from './song.dto';



@Injectable()
export class SongService {
    constructor(@InjectRepository(Song) private songRepository: Repository<Song>) { }
    
    //Add a new song to the DB
    async addSong(song : SongDto) {
        return this.songRepository.save(song);
    }

    //Get a  song base on it ID
    async getSong(songId) : Promise<Song>{
        return await this.songRepository.findOne(songId);        
    }

    //Get all songs from the DB
    async getAllSongs(): Promise<Song[]> {
        return await this.songRepository.find();        
    }
}
