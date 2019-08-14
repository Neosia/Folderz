<template>
    <div class="container-fluid">
        <div class="row">
            <div class="input-group mb-4">
            <input type="search" placeholder="Search..." aria-describedby="button-addon5" class="form-control">
            <div class="input-group-append">
              <button id="button-addon5" type="submit" class="btn btn-primary"><font-awesome-icon icon="search"></font-awesome-icon></button>
            </div>
          </div>
        </div>
        <div class="row">
            <YoutubeResult/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import YoutubeResult from '../../components/songs/YoutubeResult.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
 
library.add(faSearch);
 
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
    components : {
        YoutubeResult
    }
    
}
</script>

<style scoped>
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
        background-color: rgb(255, 145, 0);
    }
</style>