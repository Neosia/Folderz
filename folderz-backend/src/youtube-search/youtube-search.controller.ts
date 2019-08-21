import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common';
import searchYoutube from 'youtube-api-v3-search'



const API_KEY = "AIzaSyDXUbXSmKHZYktRb9WBOdgpZ7vhIxEgtoQ";
const searchYoutube = require('youtube-api-v3-search');

@Controller('youtube-search')
export class YoutubeSearchController {

    @Get("/:query")
    async getSearchResults(@Res() res, @Param() params)
    {
        const options = {
            q:params.query,
            part:'snippet',
            type:'video'
        };
        let result = await searchYoutube(API_KEY,options);

        return res.status(HttpStatus.OK).json(result);
    }
    
}
