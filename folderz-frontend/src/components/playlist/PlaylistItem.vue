<template>
    <div class="col-2 photobox_type3">
        <div class="playlist-item photobox__preview photobox__previewbox" @click="$emit('playlistClicked', playlist.id)">
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
        background-color: rgb(75, 50, 0);                     
        margin-bottom: 30px;
        box-shadow: -9px 9px 8px -5px rgb(150, 150, 150);
        cursor: pointer;
    }
    .photobox__previewbox:before{
        content: "";
    }   

    .playlist-item img {
        width: 100%;
        height: 80%;
    }

    .legend {
        color: rgb(255, 255, 255);
        vertical-align: middle;
        padding: 5px; 
        font-weight: bold;
    }

    .photobox_type3 .photobox__previewbox:before{
        width: 100%;
        height: 100%;
        
        background-color: var(--photoboxOverlay, rgba(255, 255, 255, 0.3));
        opacity: 0;
        transition: opacity var(--photoboxAnimationDuration, .4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);
        will-change: opacity;
        
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .photobox_type3:hover .photobox__previewbox:before{
        opacity: 1;
    }

    .photobox_type3 .photobox__label{
        width: 98%;
        text-align: center;
        
        opacity: 0;  
        transition: opacity calc(var(--photoboxAnimationDuration, .4s) / 4) cubic-bezier(0.71, 0.05, 0.29, 0.9);
        will-change: opacity;
        
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    .photobox_type3:hover .photobox__label{
        opacity: 1;
        transition-duration: var(--photoboxAnimationDuration, .4s);
        transition-delay: calc(var(--photoboxAnimationDuration, .4s) / 2);
    }

    .photobox_type3 .photobox__preview{
        transition: transform var(--photoboxAnimationDuration, .4s) cubic-bezier(0.71, 0.05, 0.29, 0.9);
        will-change: transform;
        transform: scale(1) rotate(0);
    }

    .photobox_type3:hover .photobox__preview{
    transform: scale(1) rotate(5deg);
    }
</style>
