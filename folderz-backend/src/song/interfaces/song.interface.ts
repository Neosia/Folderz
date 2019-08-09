import { Document } from 'mongoose';

export interface Song extends Document {
    readonly title: String,
    readonly artist: String,
    readonly duration: String,
    readonly date: Date
}