<template>
    <div class="row player">
        <img class="col-1" :src="'https://img.youtube.com/vi/' + songId + '/0.jpg'"/>
        <div class="col-2 infos">
            <p class="song-title">{{song.title}}</p>
            <p>{{song.artist}}</p>
            <p>{{song.releaseDate}}</p>
        </div>
        <div class="col-6">
            <PlayerButtons/>
        </div>
        <div class="col-3">
            <h1>{{song.title}}</h1>
        </div>
    </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed';
import PlayerButtons from './Player-buttons.vue';

export default {
    data() {
        return {
            song : {
                title : 'none',
                artist : 'none',
                youtubeUrl : 'https://www.youtube.com/watch?v=Z22JIrMmgzE'
            }
        }
    },
    methods : {
        updatePlayer : function(song) {
                this.song = song;
        }
    },
    computed : {
        songId : function() {
            return getIdFromURL(this.song.youtubeUrl);
        }
    },
    components : {
        PlayerButtons
    }
}
</script>

<style scoped>
    .player {
        width: 100%;
        height: 100%;
        background-color: rgb(32, 32, 32);
        color : white;
    }
    .infos {
        padding: 0px;
    }
    .infos p{
        text-align: left;
        margin: 0px;
    }
    .song-title{   
        font-weight: bold;
        font-size: 1.2em;     
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>