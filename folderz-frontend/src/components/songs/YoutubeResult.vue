<template>
    <div class="col-4 ytResult">
        <div class="row headerYt">
            <img class="ytLogo" src="@/../public/resources/ytLogo.png">
        </div>
        <modal name="ytPlayer" width="640" height="360">
            <youtube :videoId="playerSongId"></youtube>
        </modal>
        <YoutubeItem v-for="item in this.results.items" :key="item.etag" :result="item" @preview="playYT" />
    </div>
</template>


<script>
import Axios from 'axios';
import { server } from "../../helper";
import YoutubeItem from './YoutubeItem.vue'
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
    data() {
        return {
            results : [], 
            playerSongId: ''
        }
    },
    methods :  {
        getResults : function(query) {
            Axios.get(`${server.baseURL}/youtube-search/${query}`).then(data => this.results = data.data);
        },
        playYT : function(songId) {
            this.playerSongId = songId;
            this.$modal.show('ytPlayer');
        }
    }, 
    components : {
        YoutubeItem
    }
}
</script>

<style scoped>
    .ytResult {     
        background-color: white;
        box-shadow: -9px 9px 8px -5px rgb(150, 150, 150);
        color: black;    
        width : 100%;
        margin: 15px;
    }
    .ytLogo {
        width: 30%;
        margin: auto;
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>