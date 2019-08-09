
import * as mongoose from 'mongoose';


export const SongSchema = new mongoose.Schema({
    title: String,
    artist: String,
    duration: String,
    date: Date
});

