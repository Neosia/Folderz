<template>
    <div class="container-fluid">
        <div class="row">
            <router-link class="col-2 menuSong" to="/songs/allSongs">All songs</router-link>
            <router-link class="col-2 menuSong" to="/songs/addSong">New Song</router-link>
            <router-link class="col-2 menuSong" to="/songs/searchSong">Search Song</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
    .menuSong{
        margin-bottom: 30px;
        box-shadow: -9px 9px 8px -5px rgba(166,164,166,1);
        width: 100%;
        height: 80%;
    }

    .menuSong:hover {
        opacity: 0.66;
    }

    .row{
        padding: 30px;
    }
</style>
