<template>
    <div class="col-3 playlist-item">
        <div class="img-playlist">
            <img src="@/../public/resources/playlist.png"/>
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
        background-color: black;    
        border-radius: 25px;                    
        margin-bottom: 30px;
    }

    .img-playlist:hover{
        background-color: rgb(150, 146, 146);    
        border-radius: 25px;    
    }

    img {
        width: 100%;
        height: 80%;
        padding: 5px;
    }

    .legend {
        color: white;
        vertical-align: middle;
        padding: 5px;
        border-radius: 0px 0px 25px 25px;   
    }
</style>
