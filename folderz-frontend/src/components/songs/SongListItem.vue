<template>
    <div class="row song-item" @click="$emit('playClicked', songId)">
        <img class="col-1" :src="'https://img.youtube.com/vi/' + songId + '/0.jpg'"/>
        <div class="col-3 infos">
            <p class="song-title">{{song.title}}</p>
            <p>{{song.artist}}</p>
            <p>{{song.releaseDate}}</p>
        </div>        
    </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed';


export default {
    props : {
        song : {
            type : Object
        }
    },
    computed : {
        songId : function() {
            return getIdFromURL(this.song.youtubeUrl);
        }        
    }
    
}
</script>

<style scoped>
    .song-item{
        background-color: white;                     
        margin-top: 30px;        
        box-shadow: 0px 0px 5px 5px rgba(189, 189, 189, 0.445);
        padding: 0px !important;
    }

    .song-item img{
        width: 100%;
        height: 100%;
        padding: 0px;
    }

    .song-item:hover{
        opacity: 0.5;
    }

    .infos p {
        text-align: left;
        margin: 0px;
    }
    .song-title{   
        font-weight: bold;
        font-size: 1.2em;     
    }

</style>