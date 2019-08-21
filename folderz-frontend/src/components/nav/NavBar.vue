<template>
    <ul class="navbarCustom">
        <li class="navLink" v-for="item in navLinks" :key="item.route">
            <router-link :to="item.route"><font-awesome-icon :icon="item.icon"/></router-link>
        </li>            
    </ul>
</template>


<script>
    import Vue from 'vue';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faStream, faMusic, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
    
    library.add(faStream, faMusic, faHome, faSearch);
    
    Vue.component('font-awesome-icon', FontAwesomeIcon);

    export default {
    data() {
        return {
        navLinks: [  
            { route: "/", name: "Home", icon:"home"},
            { route: "/playlist", name: "Playlist", icon:"stream"},
            { route: "/songs/allSongs", name: "Songs", icon:"music" },
            { route: "/songs/searchSong", name: "Search", icon:"search" }
        ]
        };
    },
    computed:{
        brandActiveVar : function() {        
            return this.$route.path == '/';
        }
    }
    };
</script>

<style scoped>
    .navbarCustom{
        background-color: rgb(255, 255, 255) !important;
        padding: 0px;
        margin: 0px;
        box-shadow: 9px 0px 8px -5px rgb(150, 150, 150);
    }
    li{
        list-style-type: none;
        padding: 10px 0 10px 0px;
        border-bottom: 1px solid #222;
        text-align: center;
        cursor: pointer;
    }
    a{
        color: rgb(0, 75, 50);
        text-decoration: none;
        padding: 10px 10px;
    }
    li:hover, .active{
        background: rgb(204, 204, 204);
        opacity: 1;
    }
    img{
        width: 30px;
        opacity: 0.6;
    }
    li:hover img, .active img{
        opacity: 1;
    }

</style>
