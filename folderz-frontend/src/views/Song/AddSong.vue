<template>
    <div class="container formNewSong">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="inputs">     
              <div class="input-group">       
                <label for="title">Title</label>
                <input v-model="form.title" name="title" placeholder="Title ..." type="text"/>  
              </div>   
              <div class="input-group">
                <label for="artist">Artist</label>
                <input v-model="form.artist" name="artist" placeholder="Artist ..." type="text"/> 
              </div>
              <div class="input-group">
                <label for="ytUrl">YouTube Url</label>
                <input v-model="form.ytUrl" name="ytUrl" placeholder="Url ..." type="text"/> 
              </div>
              <div class="input-group">
                <label for="date">Date</label>
                <input v-model="form.date" name="date" placeholder="Date ..." type="date"/>      
              </div>            
            </div>
            <div class="buttons">
                <b-button type="reset" variant="danger">Reset</b-button> | 
                <b-button type="submit" variant="primary">Submit</b-button>  
            </div>      
        </b-form>
  </div>
</template>
<script>
  import axios from "axios";
  import { server } from "../../helper";

  export default {
    data() {
      return {
        form: {
          title: '',
          artist: '',
          ytUrl: '',
          date:'',          
        },
        show: true
      }
    },
    methods: {     
      onSubmit() {
      let songData = {
          title: this.form.title,
          artist: this.form.artist,
          youtubeUrl: this.form.ytUrl,
          releaseDate: this.form.date
      };
      this.__submitToServer(songData);
    },
    __submitToServer(dataPost) {
      let self = this;
      axios.post(`${server.baseURL}/song/new`, dataPost).then(function() {
        self.$router.push({ name: "home" });
      });
    },

      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }, 
    mounted() {
      if(this.$route.params.YtUrlPosted){
        this.form.ytUrl = this.$route.params.YtUrlPosted;
      }
    }
  }
</script>

<style>

    .inputs{
        background-color: #f8f9fa;
        margin-top: 30px;
        box-shadow: -9px 9px 8px -5px rgba(166,164,166,1);
        padding: 30px;
        color: black;
        margin-bottom: 15px;
    }
    .formNewSong label{
        text-align: left;
        font-weight: bold;
    }
    .buttons {
      background-color: #f8f9fa;
      box-shadow: -9px 9px 8px -5px rgba(166,164,166,1);
      background-color: aliceblue;
      padding: 30px;
    }
</style>
