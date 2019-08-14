import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title:string;

    @Column({ length: 100 })
    artist:string;

    @Column({ length: 100 })
    youtubeUrl:string;

    @Column({type :'date'}) 
    releaseDate:Date;
}