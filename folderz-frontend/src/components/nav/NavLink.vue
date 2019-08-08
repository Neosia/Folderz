<template>
    <b-nav-item class="navLink" :to=nLink.route> 
        {{ nLink.name }}          
    </b-nav-item>    
</template>



<script>
    export default {
        props: {
            nLink : {
                type : Object
            }
        }
    }
</script>

<style>
    .navLink {
        position: relative;
        border: 2px solid transparent;
    }
    .navLink a:hover{
        color: black;
    }

    .navLink::after {
        width: 0%;
        height: 2px;
        display: block;
        background-color: rgb(255, 145, 0);
        content: " ";
        position: absolute;
        top: 34px;
        left: 50%;
        transition: left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .navLink:hover::after {
        width: 100%;
        height: 2px;
        display: block;
        background-color: rgb(255, 145, 0);
        content: " ";
        position: absolute;
        top: 34px;
        left: 0;
    }
</style>



