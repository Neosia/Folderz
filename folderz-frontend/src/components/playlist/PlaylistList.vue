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

    export default {
        data(){
            return {
                playlists : [
                    {id: 1, name: "Summer Party"},
                    {id: 2, name: "Chill"},
                    {id: 3, name: "Night"},
                    {id: 4, name: "Road Trip"},
                    {id: 5, name: "Rock"},
                    {id: 6, name: "Rap"},
                    {id: 7, name: "Pop"},   
                    {id: 8, name: "RnB"},
                ]
            }
        },
        components : { PlaylistItem },
        methods: {
            onPlaylistClick(idPlaylist) {
                alert(this.playlists.find(x => x.id === idPlaylist).name);
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

