<template>
    <div class="row youtube-item">
        <img class="col-3" @click="$emit('preview', result.id.videoId)" :src="'https://img.youtube.com/vi/' + result.id.videoId + '/0.jpg'"/>
        <div class="col-6 infos" @click="$emit('preview', result.id.videoId)">
            <p class="song-title" v-html="result.snippet.title"></p>
            <p class="channelDate">{{result.snippet.channelTitle}} | {{result.snippet.publishedAt | formatDate}}</p>
        </div> 
        <div class="col-3 button-new-div">            
            <router-link id="button-new" :to="{ name : 'newSong', params : { YtUrlPosted : urlFromId} }">
                <font-awesome-icon icon="plus"></font-awesome-icon>
            </router-link>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

 
library.add(faPlus);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
    props : {
        result : {
            type: Object
        }
    }, 
    filters : {
        formatDate : function(value) {
            if (value) {
                return moment(String(value)).format('DD/MM/YYYY');
            }
        }
    },
    computed : {
        urlFromId : function() {
            return 'https://www.youtube.com/watch?v=' + this.result.id.videoId;
        }        
    }
}
</script>


<style scoped>
    .youtube-item{
        margin-bottom: 10px;        
    }

    .youtube-item:hover{
        background-color: rgb(225, 225, 225);
        cursor: pointer;
    }

    .infos {        
        padding: 0px;
    }

    .infos p {
        text-align: left;
        margin: 0px;
    }
    .song-title{   
        font-size: 1.2em; 
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;  
        max-height: 2.4em; /* (Number of lines you want visible) * (line-height) */
        line-height: 1.2em; 
    }
    .channelDate{
        font-weight: 0.8em;
        color: rgb(105, 105, 105);
    }
    #button-new{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: white;
        background-color: rgb(189, 189, 189);        
    }
    #button-new:hover{
        background-color: rgb(0, 75, 50);
    }
    .button-new-div {
        padding: 0px;
    }

</style>