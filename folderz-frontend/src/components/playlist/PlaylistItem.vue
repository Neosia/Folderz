<template>
    <div class="col-2 playlist-item">
        <div class="img-playlist" @click="$emit('playlistClicked', playlist.id)">
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
    .img-playlist{
        background-color: white;                     
        margin-bottom: 30px;
        box-shadow: -9px 9px 8px -5px rgba(166,164,166,1);
    }

    .img-playlist:hover{
        opacity: 0.66; 
    }

    .img-playlist img {
        width: 100%;
        height: 80%;
    }

    .legend {
        color: rgb(255, 145, 0);
        vertical-align: middle;
        padding: 5px; 
    }
</style>
