<template>
    <div class="container-fluid songs-list">
        <modal name="ytPlayer" width="640" height="360">
            <youtube :videoId="playerSongId"></youtube>
        </modal>
        <SongListItem v-for="item in songs" :key="item.id" :song="item" @playClicked="playsong"/>        
    </div>  
</template>


<script>
    import SongListItem from '@/components/songs/SongListItem.vue'
    import Axios from 'axios';
    import { server } from "../../helper";

    export default {
        data() {
            return {
                songs : [
                ],
                playerSongId : ''
            }
        },
        created() {
            Axios.get(`${server.baseURL}/song/all`).then(data => this.songs = data.data);
        },
        components : {
            SongListItem
        }, 
        methods : {
            playsong : function(songId) {
                this.playerSongId = songId;
                this.$modal.show('ytPlayer');
            }
        }
    }
</script>

<style scoped>
    .songs-list {
        margin: auto;
    }
</style>