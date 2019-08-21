<template>
    <div class="container-fluid">
        <div class="row headerSearch">
            <div class="input-group mb-4 col-6">
                <input type="search" v-on:keyup.enter="search()" placeholder="Search..." aria-describedby="button-addon5" class="form-control" v-model="userInput">
                <div class="input-group-append">
                    <button id="button-addon5" @click="search()"  type="submit" class="btn btn-primary"><font-awesome-icon icon="search"></font-awesome-icon></button>
                </div>
            </div>
        </div>
        <div class="row allSearch">
            <YoutubeResult ref="ytResult" :query="this.userInput"/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import YoutubeResult from '../../components/songs/YoutubeResult.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

 
library.add(faSearch);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
    
    data() {
        return {
            userInput : ''
        }
    },
    components : {
        YoutubeResult
    }, 
    methods : {
        search() {
            this.$refs.ytResult.getResults(this.userInput);
        }
    }
    
}
</script>

<style scoped>

    .headerSearch {
        box-shadow: 0px 9px 8px -5px rgb(150, 150, 150);
    }
    .form-control::placeholder {
        font-size: 0.95rem;
        color: #aaa;
        font-style: italic;
    }
    .form-control:focus {
        box-shadow: none;
    }

    .form-control-underlined {
        border-width: 0;
        border-bottom-width: 1px;
        border-radius: 0;
        padding-left: 0;
    }

    #button-addon5 {
        background-color: rgb(0, 75, 50);
    }

    .input-group {
        margin : auto;
        margin-top : 15px;
    }

    .allSearch {
        padding: 0px;
    }
</style>