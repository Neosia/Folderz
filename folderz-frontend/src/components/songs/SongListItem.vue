<template>
    <div class="row song-item">
        <img class="col-1" :src="song.track.album.images[0].url"/>
        <div class="col-3 infos">
            <p class="song-title">
                {{song.track.name}}
            </p>
            <p>
                <span v-for="artist in song.track.artists" :key="artist.id">
                    {{artist.name}} 
                </span>
            </p>
            <p>{{song.track.album.release_date}}</p>
        </div>        
    </div>
</template>

<script>
export default {
    props : {
        song : {
            type : Object
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