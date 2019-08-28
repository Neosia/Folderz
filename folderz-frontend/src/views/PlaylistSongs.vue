<template>
    <div class="container-fluid songs-list">
        <SongListItem v-for="item in songs" :key="item.id" :song="item"/>        
    </div>  
</template>


<script>
    import SongListItem from '@/components/songs/SongListItem.vue'
    import Axios from 'axios';
    import { server } from "../helper";

    export default {
        data() {
            return {
                songs : [],
                playerSongId : ''
            }
        },
        created() {
            Axios.get(`${server.baseURL}/spotify-api/allPlaylistSongs/${this.$cookie.get('user_access_token')}/${this.$route.params.id}`).then(data => this.songs = data.data.items);
        },
        components : {
            SongListItem
        }, 
        methods : {
        }
    }
</script>

<style scoped>
    .songs-list {
        margin: 0px;
    }
</style>