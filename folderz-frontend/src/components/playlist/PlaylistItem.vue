<template>
    <div class="col-2">
        <div class="playlist-item" @click="$emit('playlistClicked', playlist.id)">
            <img src="@/../public/resources/playlist.jpg"/>
            <div class="legend">{{playlist.name}}</div>
        </div>
    </div>
</template>


<script>
    export default {
        props : {
            playlist : {
                type : Object,
                required: true
            }
        }
        
    }
</script>


<style>
    .playlist-item{
        background-color: white;                     
        margin-bottom: 30px;
        box-shadow: -9px 9px 8px -5px rgba(166,164,166,1);
    }

    .playlist-item:hover{
        opacity: 0.66; 
    }

    .playlist-item img {
        width: 100%;
        height: 80%;
    }

    .legend {
        color: rgb(255, 145, 0);
        vertical-align: middle;
        padding: 5px; 
    }
</style>
