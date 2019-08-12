import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';



@Injectable()
export class SongService {
    constructor(@InjectRepository(Song) private usersRepository: Repository<Song>) { }
    
    //Add a new song to the DB
    async addSong(song : Song) {
        this.usersRepository.save(song);
    }

    //Get all songs from the DB
    async getAllSongs(): Promise<Song[]> {
        return this.usersRepository.find();
    }



}
