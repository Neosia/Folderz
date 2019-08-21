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
        background-color: rgb(255, 255, 255);                     
        margin-top: 5px;        
        padding: 0px !important;
        color: rgb(0, 75, 50);
        box-shadow: -9px 1px 8px -5px rgb(150, 150, 150);
        cursor: pointer;
    }

    .song-item img{
        width: 100%;
        height: 100%;
        padding: 0px;
    }

    .song-item:hover{
        opacity: 0.8;
    }
    .infos{
        margin-top: 20px;
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