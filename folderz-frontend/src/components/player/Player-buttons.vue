<template>
    <div class="player-ihm">
        <div class="row button-container">
            <font-awesome-icon icon="arrow-circle-left" size="3x"></font-awesome-icon>
            <font-awesome-icon :icon="iconPlayState" size="4x" @click="playTrigger()"></font-awesome-icon>
            <font-awesome-icon icon="arrow-circle-right" size="3x"></font-awesome-icon>
        </div>
        <div class="row progress-slide-bar">            
            <input type="range" :style="customBackground" @input="progressBarClicked()" v-model="currentTime"  min="0" :max="fullTime"/>
        </div>
        <div class="row time-code">            
            <div class="start-time">{{secondsToDisplay(this.currentTime)}}</div>
            <div class="end-time">{{secondsToDisplay(this.fullTime)}}</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlayCircle, faPauseCircle, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

 
library.add(faPlayCircle, faPauseCircle, faArrowCircleLeft, faArrowCircleRight);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
    data () {
        return {
            currentTime : 0,
            fullTime : 0,
            customBackground : '', 
            playing: false,
            iconPlayState : 'play-circle'
        }
    }, 
    methods : {
        init : function(videoDuration){
            this.playing = false;
            this.iconPlayState = 'play-circle';
            this.fullTime = videoDuration;
        },
        secondsToDisplay : function(valueInSeconds) {
            let minute = Math.floor(valueInSeconds / 60);
            let seconds = valueInSeconds % 60;
            return minute + ":" + ("0" + seconds).slice(-2);
        }, 
        progressBarClicked() {
            this.updateProgressBar();
            this.$emit("updateVideoTimer", this.currentTime);
        },
        updateProgressBar : function() {
            var positionalValue = (this.currentTime)/(this.fullTime)*100;
            var positionalValueTo = positionalValue + 0.1;
            let backgroundStyle = 'linear-gradient(to right, #ffffff ' + positionalValue + '%, #808080 ' + positionalValueTo + '%)';
            this.customBackground = 'background-image : ' + backgroundStyle;
        }, 
        playTrigger : function() {            
            this.playing = !this.playing;
            if(this.playing) {
                this.iconPlayState = 'pause-circle';                
            }
            else {
                this.iconPlayState = 'play-circle';
            }
            this.$emit('playClicked');            
        }, 
        updateTimeDisplay : function(value) {
            this.currentTime = Math.round(value);
            this.updateProgressBar();
        }
    }
}
</script>

<style scoped>
    .player-ihm {
        height: 100%;
    }
    .button-container {
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }
    .button-container * {
        margin: 5px;
    }
    .button-container *:hover{
        color: rgb(126, 126, 126);
    }  
    .time-code {
        margin-top: 5px;
        display: block;
        color : white; 
        font-size: 0.75em;
    }
    .start-time {
        float : left;
    }
    .end-time {
        float : right;
        text-align: right;
    }
    
</style>