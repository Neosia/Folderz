<template>
    <div>
        <div class="row">
            <router-link class="col-2 menuSong" to="/songs/allSongs">All songs</router-link>
            <router-link class="col-2 menuSong" to="/songs/addSong">New Song</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
    .menuSong{
        margin-bottom: 30px;
        background-color: black;
        box-shadow: -9px 9px 8px -5px rgb(24, 24, 24);
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
