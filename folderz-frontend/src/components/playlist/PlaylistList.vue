<template>
    <div class="container-fluid playlist-list">
        <div class="row">
            <PlaylistItem v-for="item in playlists" :key="item.id" :playlist="item" @playlistClicked="onPlaylistClick(item.id)">
            </PlaylistItem>
        </div>
    </div>
</template>

<script>
    import PlaylistItem from './PlaylistItem.vue';
    import Axios from 'axios';
    import { server } from "../../helper";

    export default {
        data(){
            return {
                playlists : [
                ]
            }
        },
        components : { PlaylistItem },
        created() {
            Axios.get(`${server.baseURL}/spotify-api/allPlaylist/${this.$cookie.get('user_access_token')}`).then(data => this.playlists = data.data.items);
        },
        methods: {
            onPlaylistClick(idPlaylist) {
                this.$router.push({ name: "playlistSongs" , params : {id : idPlaylist}});
            }
        }

    }
</script>

<style scoped>
    .playlist-list{
        margin: auto;
    }

    .row {
        padding: 30px;
    }
</style>

