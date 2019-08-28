import { Controller, Get, Res, Param, Req, HttpStatus } from '@nestjs/common';
import Axios from 'axios';
import { cpus } from 'os';

@Controller('spotify-api')
export class SpotifyApiController {
    
    
    private readonly client_id = '3d68c663846e48ceb14e8809eb6562e0';
    private readonly client_secret = '98a98eb4869f4b50aafb3562ad6cdddb';
    private readonly  redirect_uri = 'http://localhost:3000/spotify-api/callback';
    private readonly  response_type = 'code';
    private acessToken = '';
    
    @Get("/login")
    async getLogin(@Res() res)
    {  
        res.redirect('https://accounts.spotify.com/authorize?'+
        'client_id=' + this.client_id +
        '&redirect_uri=' + this.redirect_uri + 
        '&response_type=' + this.response_type
        );
    }
    
    @Get("/callback")
    async getCallback(@Res() res, @Req() req){        
        var codeReceived = req.query.code || null;
        if(codeReceived != null) {
            Axios({
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                params: {
                    client_id : this.client_id,
                    client_secret: this.client_secret,
                    code: codeReceived,
                    grant_type: 'authorization_code',                    
                    redirect_uri: this.redirect_uri
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                responseType: 'json'
            })
            .catch(function(){
                return res.redirect('http://localhost:8080/errorLogin');
            })
            .then(function (response) {
                res.cookie('user_access_token', response.data.access_token);
                return res.redirect('http://localhost:8080/login/');
            });
        }
        else {
            return res.status(HttpStatus.OK).json('Not connected !');
        }
    }

    @Get("/allPlaylist/:token")
    async getAllPlaylist(@Res() res, @Param('token') token){  
        Axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me/playlists',
            headers: {
                'Authorization' : 'Bearer ' + token
            },
            responseType: 'json'
        })
        .then(function(response) {
            return res.status(HttpStatus.OK).send(response.data);
        })
        .catch(function(error) {
            
        });        
    }

    @Get("/allPlaylistSongs/:token/:playlistID")
    async getAllPlaylistSongs(@Res() res, @Param() params){  
        Axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/playlists/'+ params.playlistID + '/tracks',
            params : {
                market : 'FR'
            },
            headers: {
                'Authorization' : 'Bearer ' + params.token
            },
            responseType: 'json'
        })
        .then(function(response) {
            return res.status(HttpStatus.OK).json(response.data);
        })
        .catch(function(error) {
            
        });        
    }


}
