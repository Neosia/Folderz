<template>
    <b-navbar variant="light" type="light">
      <b-navbar-brand href="#">Folderz</b-navbar-brand>      
      <b-collapse id="nav-collapse" is-nav>
        <b-nav>
          <NavLink v-for="item in navLinks" :key="item.route" :nLink="item">{{ item.name }}</NavLink>
        </b-nav>
      </b-collapse>
    </b-navbar>
</template>


<script>
    import NavLink from "./NavLink.vue";

    export default {
    data() {
        return {
        navLinks: [
            { route: "/", name: "Home" },
            { route: "/about", name: "About" },        
            { route: "/playlist", name: "Playlist" },
            { route: "/songs", name: "Songs" }
        ]
        };
    },
    components: {
        NavLink
    }
    };
</script>

<style>
    .navbar .navbar-brand{
        color: black !important;
        font-weight: bold;
        font-size: 2em;
    }

    nav a {
        color: black;
    }
    
    .navbar a.router-link-exact-active {
        color: rgb(255, 145, 0);
        font-weight: bold;
    }
</style>
