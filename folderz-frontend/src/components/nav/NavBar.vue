<template>
    <b-navbar variant="light" type="light">
      <b-navbar-brand href="/" :class="{brandActive: brandActiveVar}">Folderz</b-navbar-brand>      
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
            { route: "/playlist", name: "Playlist" },
            { route: "/songs", name: "Songs" }
        ]
        };
    },
    computed:{
        brandActiveVar : function() {        
            return this.$route.path == '/';
        }
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
    
    .navbar a.router-link-active {
        color: rgb(255, 145, 0);
        font-weight: bold;
    }

    .navbar .navbar-brand.brandActive {
        color: rgb(255, 145, 0) !important;
    }
</style>
