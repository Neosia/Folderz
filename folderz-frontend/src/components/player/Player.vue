<template>
    <div class="row player">
        <youtube class="col-2" :videoId="songId" :player-vars="{ autoplay: 0, autohide:1, controls: 0, showinfo: 0}" @ready="ready" :player-width="260" :player-height="130" ></youtube>
        <!--<img class="col-1" :src="'https://img.youtube.com/vi/' + songId + '/0.jpg'"/>-->
        <div class="col-2 infos">
            <p class="song-title">{{song.title}}</p>
            <p>{{song.artist}}</p>
            <p>{{song.releaseDate}}</p>
        </div>
        <div class="col-6">
            <PlayerButtons ref="playerButtons" @playClicked="HandlePlayInput()" @updateVideoTimer="updateVideoTimer" />
        </div>
        <div class="col-2">
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
            }, 
            playing : false
        }
    },
    methods : {
        initPlayer : function(song) {
            this.song = song;
            this.playing = false;
            alert(this.player.getDuration());
            this.$refs.playerButtons.init(this.player.getDuration());
            var self = this;

            setInterval(function () {
                if(self.playing) {
                    self.$refs.playerButtons.updateTimeDisplay(self.player.getCurrentTime());
                }                
            }, 1000);
        }, 
        ready(event) {
            this.player = event.target;
        }, 
        HandlePlayInput() {
            this.playing = !this.playing;
            if(this.playing){
                this.player.playVideo();
            }
            else {
                this.player.pauseVideo();
            }
        }, 
        updateVideoTimer : function(valueInSeconds) {
            this.player.seekTo(valueInSeconds, false);
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
        position: fixed;
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