<template>
    <div>
        <div id="login" v-if="userToken ==''">
            <h1>First, log in to spotify</h1>
            <a href="http://localhost:3000/spotify-api/login">Login</a>
        </div>
        <div id="loggedin" v-else>
            <p>{{userToken}}</p>
            <button @click="disconnect()">Disconnect</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result : '', 
            userToken : this.$cookie.get('user_access_token'),
        }
    },
    methods : {
        disconnect(){
            this.$cookie.set('user_access_token', '');
            this.userToken = '';
        }
    }
}
</script>