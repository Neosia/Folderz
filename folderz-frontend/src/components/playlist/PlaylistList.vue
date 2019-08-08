<template>
    <div class="container playlist-list">
        <div class="row">
            <PlaylistItem v-for="item in playlists" :key="item.id" :playlist="item">
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
                    {id: 6, name: "Rap"}
                ]
            }
        },
        components : { PlaylistItem }        
    }
</script>

<style>
    .playlist-list{
        margin: auto;
    }

    .row {
        padding: 30px;
    }
</style>

